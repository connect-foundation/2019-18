import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import * as S from './styles';


const Header: React.FC = () => (
  <S.HeaderContainer>
    <HeaderLeft />
    <S.HeaderTitle>
      <h3>
        CRAFOLIO
      </h3>
    </S.HeaderTitle>
    <HeaderRight />
  </S.HeaderContainer>
);

export default Header;
