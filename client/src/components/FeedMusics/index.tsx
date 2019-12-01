import React, { useEffect, useState } from 'react';
import * as S from './styles';

const url = 'https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3';

const FeedMusics: React.FC = () => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTime, setCurTime] = useState(0);
  const [volume, setVolume] = useState(0.5);


  useEffect(() => {
    const audio = document.getElementById('myaudio') as HTMLAudioElement;

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
    audio.addEventListener('canplaythrough', () => {
      document.getElementById('play-button')!.addEventListener('click', play);
      document.getElementById('pause-button')!.addEventListener('click', pause);
    });
    audio.volume = volume;
  }, []);
  return (
    <div>
      <audio
        id="myaudio"
        // controls
        src="https://kr.object.ncloudstorage.com/crafolio/music/Happy_Haunts.mp3"
      />

      <p>{duration}</p>
      <p>{curTime}</p>
      <button type="button" id="play-button">play</button>
      <button type="button" id="pause-button">pause</button>

    </div>


  );
};

export default FeedMusics;
