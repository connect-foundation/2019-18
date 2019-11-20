import React from 'react';
import styled from 'styled-components';
import StyledLink from '../StyledLink';
import Button from '../Button';

const FeedNavigatorContainer = styled.div`
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: center;
    justify-items: center;
`;

const TabButton = styled(Button)`
    border: none;
    background: white;
    width: 7rem;
    height: 3rem;
    padding: none;
    margin: auto 0;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    outline: none;
`;

const FeedNavigator:React.FC = () => (
  <FeedNavigatorContainer>
    <StyledLink to="/">
      <TabButton>작품</TabButton>
    </StyledLink>
    <StyledLink to="/wallpaper">
      <TabButton>배경화면</TabButton>
    </StyledLink>
    <StyledLink to="/music">
      <TabButton>음악</TabButton>
    </StyledLink>
  </FeedNavigatorContainer>
);

export default FeedNavigator;
