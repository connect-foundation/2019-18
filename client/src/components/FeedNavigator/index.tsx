import React from 'react';
import * as S from './styles';


const FeedNavigator:React.FC = () => (
  <S.Container>
    <S.Navigator>
      <S.StyledNavLink to="/home/works">
        <S.TabButton>작품</S.TabButton>
      </S.StyledNavLink>
      <S.StyledNavLink to="/home/wallpaper">
        <S.TabButton>배경화면</S.TabButton>
      </S.StyledNavLink>
      <S.StyledNavLink to="/home/music">
        <S.TabButton>음악</S.TabButton>
      </S.StyledNavLink>
    </S.Navigator>
  </S.Container>
);

export default FeedNavigator;
