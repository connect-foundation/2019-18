import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import HeaderSearch from './HeaderSearch';
import HeaderGreeting from './HeaderGreeting';
import Alarm from '../../Alarm';
import * as S from './styles';
import NotificationContainer from '../../../containers/NotificationContainer';

const HeaderRight: React.FC = () => {
  const LoginUser = useSelector((state:RootState) => state.login);
  return (
    <S.HeaderRightContainer>
      <HeaderSearch />
      {!LoginUser.isLogin
        ? (
          <S.LoginContainer>
            <S.LoginLink to="/login">
              <S.LoginButton>로그인</S.LoginButton>
            </S.LoginLink>
          </S.LoginContainer>
        )
        : (
          <S.LoginContainer>
            <S.UploadButton><S.UploadLink to="/home/upload">업로드</S.UploadLink></S.UploadButton>
            <NotificationContainer />
            <HeaderGreeting />
          </S.LoginContainer>
        )}

    </S.HeaderRightContainer>
  );
};

export default HeaderRight;
