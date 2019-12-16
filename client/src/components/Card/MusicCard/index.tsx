import React from 'react';
import * as S from './styles';
import StyledLink from '../../../basics/StyledLink';
import { TextWithImg } from '../CardFooter/styles';
import CardFooter from '../CardFooter';
import MusicCardProp from './types';
import MusicPlayerMini from '../../MusicPlayerMini';

const MusicCard: React.FC<MusicCardProp> = ({
  _id, ownerId, imgUrl, creator, title, numOfComments, views,
}) => (
  <S.Container>
    <StyledLink to={`/home/detail-music/${ownerId}`}>
      <S.CardImgContainer>
        <S.CardImg src={imgUrl} />
      </S.CardImgContainer>

      <S.CardHeader>
        <S.Title>{title}</S.Title>
      </S.CardHeader>

      <S.CardBody id={creator._id}>
        <TextWithImg
          src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png"
          text={creator.name}
        />
      </S.CardBody>

      <MusicPlayerMini uri={uri} />

      <CardFooter
        smiles="20"
        comments={numOfComments}
        views={views}
      />
    </StyledLink>
  </S.Container>
);

export default MusicCard;
