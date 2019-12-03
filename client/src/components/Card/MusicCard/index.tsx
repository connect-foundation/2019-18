import React from 'react';
import * as S from './styles';
import StyledLink from '../../../basics/StyledLink';
import { TextWithImg } from '../CardFooter/styles';
import CardFooter from '../CardFooter';
import MusicCardProp from './types';

const MusicCard: React.FC<MusicCardProp> = ({
  _id, ownerId, imgUrl, creator, title, numOfComments, views,
}) => (
  <S.Container>
    <S.CardImgContainer>
      <S.CardImg src={imgUrl} />
    </S.CardImgContainer>

    <S.CardHeader>
      <StyledLink to={`/home/detail-music/${ownerId}`}>
        <S.Title>{title}</S.Title>
      </StyledLink>
    </S.CardHeader>

    <S.CardBody id={creator._id}>
      <TextWithImg
        src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png"
        text={creator.name}
      />
    </S.CardBody>

    <CardFooter
      smiles="20"
      comments={numOfComments}
      views={views}
    />
  </S.Container>
);

export default MusicCard;
