import React, { useState, useEffect, useRef } from 'react';
import VolumeUp from '@material-ui/icons/VolumeUp';
import * as S from './styles';
import { theme } from '../../style/theme';
import VolumeSlider from '../VolumeSlider';
import MusicPlayerProp from './types';

const MusicPlayer:React.FC<MusicPlayerProp> = ({
  title, author, musicUrl, coverUrl,
}) => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [volume, setVolume] = useState(30);
  const [isRepeat, setIsRepeat] = useState(false);
  // const [audio, setAudio] = useState<HTMLAudioElement>();
  const audioRef = useRef() as React.MutableRefObject<HTMLAudioElement>;

  const getLength = (time:number) => {
    let m:number | string = Math.floor(time / 60);
    let s:number | string = Math.floor(time % 60);
    if (m < 10) m = `0${m}` as string;
    if (s < 10) s = `0${s}` as string;

    return `${m}:${s}`;
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    if (!audioRef) {
      return;
    }
    setVolume(newValue as number);
    if (audioRef.current !== null) {
      audioRef.current.volume = newValue as number / 100;
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const musicSeekHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLElement;
    if (el.tagName !== 'DIV') return;

    const { clientX } = e;
    const { offsetWidth, offsetLeft } = e.currentTarget;
    const toPlay = ((clientX - offsetLeft) / offsetWidth) * 100;

    if (audioRef.current !== null) {
      audioRef.current.currentTime = (duration * toPlay) / 100;
    }
  };

  const updateDuration = () => {
    if (audioRef && audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const updateCurTime = () => {
    if (audioRef && audioRef.current) {
      setCurTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.loop = isRepeat;
      audioRef.current.addEventListener('loadeddata', updateDuration);
      audioRef.current.addEventListener('timeupdate', () => updateCurTime);
      audioRef.current.volume = volume / 100;
    }
    return () => {
      audioRef.current.removeEventListener('loadeddata', () => updateDuration);
      audioRef.current.removeEventListener('timeupdate', () => updateCurTime);
    };
  }, []);

  useEffect(() => {
    audioRef.current.loop = isRepeat;
  }, [isRepeat]);

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
            <VolumeSlider volume={volume} handleChange={handleChange} />
          </S.ControllerItem>
          <S.ControllerItem>
            <VolumeUp fontSize="small" />
          </S.ControllerItem>
          <S.ControllerItem>
            {
              isRepeat
                ? <S.RepeatIcon fontSize="small" style={{ color: theme.CRA_PURPLE }} onClick={toggleRepeat} />
                : <S.RepeatIcon fontSize="small" style={{ color: 'black' }} onClick={toggleRepeat} />
            }
          </S.ControllerItem>
        </S.Controller>
      </S.Player>
      <S.MusicCover src={coverUrl} />
      <audio
        ref={audioRef}
        src={musicUrl}
        onLoadedData={updateDuration}
        onTimeUpdate={updateCurTime}
      >
        <track kind="captions" src="" srcLang="en" label="English" />
      </audio>
    </S.PlayingArea>
  );
};

export default MusicPlayer;
