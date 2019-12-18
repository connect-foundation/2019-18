import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../modules/login/action';
import { RootState } from '../../../modules';
import HeaderSearch from './HeaderSearch';
import HeaderGreeting from './HeaderGreeting';
import Alarm from '../../Alarm';
import * as S from './styles';
import { API_SERVER } from '../../../utils/constants';
import NotificationContainer from '../../../containers/NotificationContainer';


const logout = async () => {
  await fetch(`${API_SERVER}/login/out`, {
    method: 'get',
    credentials: 'include',
  });
};

const HeaderRight: React.FC = () => {
  const LoginUser = useSelector((state:RootState) => state.login);
  const dispatch = useDispatch();
  const onLogout = () => {
    logout();
    dispatch(login());
  };
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
            <S.LoginLink to="/">
              <S.LoginButton onClick={onLogout}>로그아웃</S.LoginButton>
            </S.LoginLink>
            <S.UploadButton><S.UploadLink to="/home/upload">업로드</S.UploadLink></S.UploadButton>
            <NotificationContainer />
            <HeaderGreeting />
          </S.LoginContainer>
        )}

    </S.HeaderRightContainer>
  );
};

export default HeaderRight;
