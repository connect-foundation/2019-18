import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';

interface MusicPlayerMiniProp {
  url: string;
  isPlaying: boolean;
  playToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}
const MusicFeedPlayerMini:React.FC<MusicPlayerMiniProp> = ({
  url,
  isPlaying,
  playToggle,
  audioRef,
}) => {
  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <S.Container onClick={playToggle}>
      {
        isPlaying
          ? <S.PauseCircleOutline />
          : <S.PlayCircleOutline />
      }
      <span>미리듣기</span>
      <audio src={url} ref={audioRef} />
    </S.Container>
  );
};

export default MusicFeedPlayerMini;
