import React from 'react';
import * as S from './styles';
import TextWithImg from '../../../commons/TextWithImg';
import CardFooterProp from './types';

const CardFooter:React.FC<CardFooterProp> = ({ comments, views }) => (
  <S.Container>
    <TextWithImg src={S.Comment} small text={comments} />
    <TextWithImg src={S.View} small text={views} />
  </S.Container>
);

export default CardFooter;
