import React, { useState, useRef } from 'react';
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
      <S.StyledLink to={`/home/detail-music/${ownerId}`}>
        <S.CardImgContainer>
          <S.CardImg src={imageUrl} />

        </S.CardImgContainer>

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
        <S.CroppedCardImg src={imageUrl} />
      </S.StyledLink>

      <S.PlayButton htmlFor={_id}>
        <button type="button" id={_id} onClick={playToggle}><S.PlayIcon /></button>
      </S.PlayButton>
      <MusicFeedPlayerMini url={musicUrl} isPlaying={isPlaying} playToggle={playToggle} audioRef={audioRef} />
    </S.Container>
  );
};

export default MusicCard;
