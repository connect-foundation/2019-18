import React from 'react';

import H3 from '../../basics/H3';
import TextWithImg from '../../commons/TextWithImg';
import * as S from './styles';

import Smile from '../../assets/smile.png';
import View from '../../assets/view.png';
import Comment from '../../assets/comment.png';
import StyledLink from '../../basics/StyledLink';

interface CardProp{
  _id: string,
  ownerId: string,
  imgUrl: string;
  title: string;
  numOfComments: string;
  views: string;
  creator: {
    _id: string,
    email: string,
    name: string,
  };
}

const Card: React.FC<CardProp> = ({
  _id, ownerId, imgUrl, creator, title, numOfComments, views,
}) => (
  <S.Container>
    <S.CardImgContainer>
      <S.CardImg src={imgUrl} />
    </S.CardImgContainer>
    <S.CardHeader>
      <StyledLink to={`/home/detail-image/${ownerId}`}>
        <H3>{title}</H3>
      </StyledLink>
    </S.CardHeader>
    <S.CardBody id={creator._id}>
      <TextWithImg
        src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png"
        text={creator.name}
      />
    </S.CardBody>
    <S.CardFooter>
      <TextWithImg src={Smile} small text="20" />
      <TextWithImg src={Comment} small text={numOfComments} />
      <TextWithImg src={View} small text={views} />
    </S.CardFooter>
  </S.Container>
);

export default Card;
