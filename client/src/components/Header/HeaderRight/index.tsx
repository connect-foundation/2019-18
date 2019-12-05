import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import Alarm from '../../../assets/alarm.png';
import HeaderSearch from './HeaderSearch';
import HeaderGreeting from './HeaderGreeting';
import * as S from './styles';
import StyledLink from '../../../basics/StyledLink';

const DEFAULT_PROFILE_THUMBNAIL = 'https://kr.object.ncloudstorage.com/crafolio/user/thumbnail/user-profile-thumbnail.png';

const HeaderRight: React.FC = () => {
  const LoginUser = useSelector((state:RootState) => state.login);
  return (
    <S.HeaderRightContainer>
      <HeaderSearch />
      <StyledLink to="/home/upload/">
        <S.UploadButton>
          업로드
        </S.UploadButton>
      </StyledLink>
      <S.AlarmImg src={Alarm} />
      {!LoginUser.isLogin
        ? (
          <S.LoginContainer>
            <S.LoginButton><S.LoginLink to="/login">로그인</S.LoginLink></S.LoginButton>
            <S.ProfileImg src={DEFAULT_PROFILE_THUMBNAIL} />
          </S.LoginContainer>
        )
        : (
          <HeaderGreeting />
        )}


    </S.HeaderRightContainer>
  );
};

export default HeaderRight;
