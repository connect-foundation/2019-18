import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import { TextWithImg } from '../CardFooter/styles';
import CardFooter from '../CardFooter';
import MusicCardProp from './types';
import MusicFeedPlayerMini from '../../MusicFeedPlayerMini';

const MusicCard: React.FC<MusicCardProp> = ({
  _id, imageUrl, musicUrl, title, creator, ownerId, numOfComments, views,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playToggle = (e:React.MouseEvent<HTMLButtonElement>) => {
    setIsPlaying(!isPlaying);
  };

  return (
    <S.Container>
      <S.CardImgContainer>
        <S.StyledLink to={`/home/detail-music/${ownerId}`}>
          <S.CardImg src={imageUrl} />
          <S.CroppedCardImg src={imageUrl} />
        </S.StyledLink>

        <S.InnerPlayButton
          type="button"
          onClick={playToggle}
        >
          {
            isPlaying
              ? <S.Pause />
              : <S.PlayArrow />
          }
        </S.InnerPlayButton>
      </S.CardImgContainer>
      <S.StyledLink to={`/home/detail-music/${ownerId}`}>

        <S.CardHeader>
          <S.Title>{title}</S.Title>
        </S.CardHeader>
      </S.StyledLink>

      <S.StyledLink to={`/creator/${creator._id}`}>
        <S.CardBody id={creator._id}>
          <TextWithImg
            src={creator.thumbnailUrl}
            text={creator.name}
          />
        </S.CardBody>
      </S.StyledLink>
      <S.StyledLink to={`/home/detail-music/${ownerId}`}>
        <CardFooter
          comments={numOfComments.toString()}
          views={views.toString()}
        />
      </S.StyledLink>

      <MusicFeedPlayerMini
        url={musicUrl}
        isPlaying={isPlaying}
        playToggle={playToggle}
        audioRef={audioRef}
      />
    </S.Container>
  );
};

export default MusicCard;
