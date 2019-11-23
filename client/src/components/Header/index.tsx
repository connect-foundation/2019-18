import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import * as S from './styles';

const Header: React.FC = () => (
  <S.HeaderContainer>
    <HeaderLeft />
    <HeaderRight />
  </S.HeaderContainer>
);

export default Header;
