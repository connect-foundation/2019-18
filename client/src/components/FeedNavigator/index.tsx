import React from 'react';
import StyledLink from '../../basics/StyledLink';
import * as S from './styles';


const FeedNavigator:React.FC = () => (
  <S.FeedNavigatorContainer>
    <StyledLink to="/home/">
      작품
      {/* <S.TabButton>작품</S.TabButton> */}
    </StyledLink>
    <StyledLink to="/home/wallpaper">
      <S.TabButton>배경화면</S.TabButton>
    </StyledLink>
    <StyledLink to="/home/music">
      <S.TabButton>음악</S.TabButton>
    </StyledLink>
  </S.FeedNavigatorContainer>
);

export default FeedNavigator;
