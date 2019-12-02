import React, { useEffect, useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Slider from '@material-ui/core/Slider';
import * as S from './styles';
import VolumeSlider from '../VolumeSlider';

const url = 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3';

const getLength = (duration:number) => {
  let m:number | string = Math.floor(duration / 60);
  let s:number | string = Math.round(duration % 60);
  if (m < 10) m = `0${m}` as string;
  if (s < 10) s = `0${s}` as string;

  return `${m}:${s}`;
};

const getProgressPercentage = (duration:number, curTime:number):string =>
  // console.log(`${((Math.floor(curTime * 100) / 100) / (Math.floor(duration * 100) / 100)) * 100}%`);
  `${((Math.floor(curTime * 100) / 100) / (Math.floor(duration * 100) / 100)) * 100}%`;
const FeedMusics: React.FC = () => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [volume, setVolume] = useState(30);
  // const [value, setValue] = React.useState<number>(30);
  let audio = document.getElementById('myaudio') as HTMLAudioElement;

  const handleChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
    audio.volume = newValue as number / 100;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(!isPlaying);
    } else {
      audio.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    audio = document.getElementById('myaudio') as HTMLAudioElement;

    const play = () => {
      audio.play();
      setIsPlaying(true);
    };

    const pause = () => {
      audio.pause();
      setIsPlaying(false);
    };

    audio.addEventListener('loadeddata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', () => setCurTime(audio.currentTime));
    audio.addEventListener('canplaythrough', () => {});
    audio.volume = volume / 100;
    return () => {
      audio.removeEventListener('loadeddata', () => setDuration(audio.duration));
      audio.removeEventListener('timeupdate', () => setCurTime(audio.currentTime));
    };
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>제목</S.HeaderTitle>
        <h4>by junow | 2019.12.02 | 조회 193</h4>
      </S.Header>

      <S.PlayingArea>
        <S.Player>
          <S.SeekBar duration={duration} curTime={curTime} />

          <S.TogglePlayButton onClick={togglePlay}>
            {isPlaying
              ? <PauseIcon color="action" fontSize="large" />
              : <PlayArrowIcon color="action" fontSize="large" />}
          </S.TogglePlayButton>

          <S.PlayerTitle>
            <S.Title>곡제목이에오</S.Title>
            <S.Author>
              제작자에오
              <S.AudioLength>
                {getLength(curTime)}
                /
                {getLength(duration)}
              </S.AudioLength>
            </S.Author>
          </S.PlayerTitle>
        </S.Player>
        <S.MusicCover src="https://kr.object.ncloudstorage.com/crafolio/music-cover/freetime.jpg" />
      </S.PlayingArea>

      <S.PlayerFooter>
        <S.FooterAudioList>
          <S.FooterDl>
            <S.FooterDt>감상</S.FooterDt>
            <S.FooterDd>504회</S.FooterDd>
          </S.FooterDl>
          <S.FooterDl>
            <S.FooterDt>장르</S.FooterDt>
            <S.FooterDd>댄스 / 디스코,알엔비 / 소울,일렉트로닉,힙합 / 랩</S.FooterDd>
          </S.FooterDl>
        </S.FooterAudioList>
        <S.Right>
          <VolumeSlider volume={volume} handleChange={handleChange} />
        </S.Right>
      </S.PlayerFooter>
      <audio
        id="myaudio"
        src="https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3"
      />
    </S.Container>


  );
};

export default FeedMusics;
