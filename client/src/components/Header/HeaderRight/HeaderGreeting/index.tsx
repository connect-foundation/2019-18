import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../../../basics/Img';

const ProfileLink = styled(Link)`
    text-decoration : none;
    margin: auto;
    margin-left: 0.7rem;
`;
const ProfileImg = styled(Img)`
    height: 2.5rem;
    width: 2.5rem;
`;
const HeaderGreetingContainer = styled.div`
    display:flex;
    height: 100%;
`;

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';
const HeaderGreeting: React.FC = () => (
  <HeaderGreetingContainer>
    <ProfileLink to="/creator">
      <ProfileImg src={LOGIN_PROFILE_THUMBNAIL} />
    </ProfileLink>
  </HeaderGreetingContainer>
);

export default HeaderGreeting;
