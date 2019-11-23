import React from 'react';
import logo from '../../../assets/logo.png';
import * as S from './styles';

const HeaderLeft: React.FC = () => (
  <S.HeaderLeftContainer>
    <S.LogoImg src={logo} />
  </S.HeaderLeftContainer>
);

export default HeaderLeft;
