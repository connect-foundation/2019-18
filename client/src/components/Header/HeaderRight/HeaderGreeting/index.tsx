import React from 'react';
import styled from 'styled-components';
import Img from '../../../../basics/Img';


const ProfileImg = styled(Img)`
    margin-left: 1rem;
`;
const HeaderGreetingContainer = styled.div`
    display:flex;
    height: 100%;
`;

const LOGIN_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/origin/iu-profile-origin.png';
const HeaderGreeting: React.FC = () => (
  <HeaderGreetingContainer>
    <ProfileImg src={LOGIN_PROFILE_THUMBNAIL} />
  </HeaderGreetingContainer>
);

export default HeaderGreeting;
