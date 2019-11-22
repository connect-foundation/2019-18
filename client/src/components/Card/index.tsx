import React from 'react';

import H3 from '../../basics/H3';
import TextWithImg from '../../commons/TextWithImg';
import * as S from './styles';

import Smile from '../../assets/smile.png';
import View from '../../assets/view.png';
import Comment from '../../assets/comment.png';

interface CardProp{
  imgUrl: string;
  creator: string;
}

const Card: React.FC<CardProp> = ({ imgUrl, creator }) => (
  <S.Container>
    <S.CardImgContainer>
      <S.CardImg src={imgUrl} />
    </S.CardImgContainer>
    <S.CardHeader>
      <H3>라이언과 작은 요정들의 반짝반짝 윈터 원더랜드</H3>
    </S.CardHeader>
    <S.CardBody>
      <TextWithImg src="https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png" text={creator} />
    </S.CardBody>
    <S.CardFooter>
      <TextWithImg src={Smile} small text="20" />
      <TextWithImg src={Comment} small text="200" />
      <TextWithImg src={View} small text="200" />
    </S.CardFooter>
  </S.Container>
);

export default Card;
