import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';

interface MusicPlayerMiniProp {
  url: string;
}
const MusicPlayerMini:React.FC<MusicPlayerMiniProp> = ({
  url,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsPlaying(!isPlaying);
  };
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

export default MusicPlayerMini;
