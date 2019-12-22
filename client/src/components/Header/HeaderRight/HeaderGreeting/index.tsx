import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../../../../basics/Img';
import { RootState } from '../../../../modules';

const ProfileLink = styled(Link)`
    text-decoration : none;
    margin: auto;
    margin-left: 0.7rem;
`;
const ProfileImg = styled(Img)`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 100%;
`;
const HeaderGreetingContainer = styled.div`
    display:flex;
    height: 100%;
`;

const HeaderGreeting: React.FC = () => {
  const thumbnailUrl = useSelector((state: RootState) => state.login.thumbnailUrl);
  return (
    <HeaderGreetingContainer>
      <ProfileLink to="/creator">
        <ProfileImg src={thumbnailUrl} />
      </ProfileLink>
    </HeaderGreetingContainer>
  );
};

export default HeaderGreeting;
