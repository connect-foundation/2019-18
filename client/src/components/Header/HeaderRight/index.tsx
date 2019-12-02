import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import Button from '../../../basics/Button';
import Img from '../../../basics/Img/index';
import Alarm from '../../../assets/alarm.png';
import HeaderSearch from './HeaderSearch';
import HeaderGreeting from './HeaderGreeting';

const HeaderRightContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    /* margin-left: auto; */
    margin-right: 5rem;
`;

const LoginButton = styled(Button)`
    font-size: 0.8rem;
`;
const LoginLink = styled(Link)`
    text-decoration : none;
    margin: auto;
    margin-left: 1rem;
`;

const AlarmImg = styled(Img)`
    margin-left: 1rem;
`;

const ProfileImg = styled(Img)`
    margin-left: 1rem;
`;
const LoginContainer = styled.div`
    display: flex;
`;

const DEFAULT_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png';

const HeaderRight: React.FC = () => {
  const LoginUser = useSelector((state:RootState) => state.login);
  return (
    <HeaderRightContainer>
      <HeaderSearch />
      <AlarmImg src={Alarm} />
      {!LoginUser.isLogin
        ? (
          <LoginContainer>
            <LoginLink to='/login'><LoginButton>로그인</LoginButton></LoginLink>
            <ProfileImg src={DEFAULT_PROFILE_THUMBNAIL} />
          </LoginContainer>
        )
        : (
          <HeaderGreeting />
        )}


    </HeaderRightContainer>
  );
};

export default HeaderRight;
