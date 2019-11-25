import React from 'react';
import * as S from './styles';
import Search from '../../../../assets/search.png';

const HeaderSearch: React.FC = () => (
  <S.HeaderSearchContainer>
    <S.SearchImg src={Search} />
    <S.HeaderInput />
  </S.HeaderSearchContainer>
);

export default HeaderSearch;
