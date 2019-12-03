import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { theme } from '../../style/theme';
import VolumeSlider from '../VolumeSlider';
import MusicPlayerProp from './types';

const MusicPlayer:React.FC<MusicPlayerProp> = ({
  title, author, musicUrl, coverUrl,
}) => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [curTime, setCurTime] = useState(0);
  const [volume, setVolume] = useState(30);
  const [isRepeat, setIsRepeat] = useState(false);

  let audio = document.getElementById('myaudio') as HTMLAudioElement;

  const getLength = (time:number) => {
    let m:number | string = Math.floor(time / 60);
    let s:number | string = Math.round(time % 60);
    if (m < 10) m = `0${m}` as string;
    if (s < 10) s = `0${s}` as string;

    return `${m}:${s}`;
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
    audio.volume = newValue as number / 100;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleRepeact = () => {
    setIsRepeat(!isRepeat);
  };

  const musicSeekHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLElement;
    if (el.tagName !== 'DIV') return;

    const { clientX } = e;
    const { offsetWidth, offsetLeft } = e.currentTarget;
    const toPlay = ((clientX - offsetLeft) / offsetWidth) * 100;
    audio.currentTime = (duration * toPlay) / 100;
  };


  useEffect(() => {
    audio = document.getElementById('myaudio') as HTMLAudioElement;
    audio.loop = isRepeat;
    audio.addEventListener('loadeddata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => setCurTime(audio.currentTime));
    audio.volume = volume / 100;

    return () => {
      audio.removeEventListener('loadeddata', () => setDuration(audio.duration));
      audio.removeEventListener('timeupdate', () => setCurTime(audio.currentTime));
    };
  }, []);

  useEffect(() => {
    audio.loop = isRepeat;
  }, [isRepeat]);

  const test = () => {
    console.log('hi');
  };
  return (
    <S.PlayingArea>
      <S.Player id="player" onMouseDown={musicSeekHandler}>
        <S.SeekBar duration={duration} curTime={curTime} />

        <S.TogglePlayButton onClick={togglePlay}>
          {isPlaying
            ? <S.PauseIcon fontSize="large" style={{ color: 'black' }} />
            : <S.PlayArrowIcon fontSize="large" style={{ color: 'black' }} />}
        </S.TogglePlayButton>

        <S.PlayerTitle>
          <S.Title>{title}</S.Title>
          <S.Author>
            {author}
            <S.AudioLength>
              {getLength(curTime)}
              /
              {getLength(duration)}
            </S.AudioLength>
          </S.Author>
        </S.PlayerTitle>
        <S.Controller>
          <S.ControllerItem>
            {
              isRepeat
                ? <S.RepeatIcon fontSize="large" style={{ color: theme.ELECTRON_BLUE }} onClick={toggleRepeact} />
                : <S.RepeatIcon fontSize="large" style={{ color: 'black' }} onClick={toggleRepeact} />
            }
          </S.ControllerItem>
          <S.ControllerItem>
            <VolumeSlider volume={volume} handleChange={handleChange} />
          </S.ControllerItem>
        </S.Controller>
      </S.Player>
      <S.MusicCover src={coverUrl} />
      <audio
        id="myaudio"
        src="https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3"
        autoPlay
      >
        <track kind="captions" src="" srcLang="en" label="English" />
      </audio>
    </S.PlayingArea>
  );
};

export default MusicPlayer;
