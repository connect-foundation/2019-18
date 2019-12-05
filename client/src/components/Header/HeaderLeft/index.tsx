import React from 'react';
import logo from '../../../assets/logo_planet.png';
import * as S from './styles';

const HeaderLeft: React.FC = () => (
  <S.HeaderLeftContainer to="/">
    <S.LogoImg src={logo} />
  </S.HeaderLeftContainer>
);

export default HeaderLeft;
