import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Login from '../components/Login';
import { API_SERVER, OAUTH_URL, LOGIN } from '../utils/constants';
import { RootState } from '../modules';
import { login } from '../modules/login';


const S = {
  LoginContainer: styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-items: center;
  justify-content: center;
`,
};
const isEmailForm = (input:string) => {
  const eamilRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  // chromium에서 돌아가는 코드에서 빼온거라고 함
  return eamilRegExp.test(input);
};
const LoginContainer:React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const isLogin = useSelector((state:RootState) => state.login.isLogin);
  const [loginSuccess, setLoginSuccess] = useState({ success: false, message: '' });
  const dispatch = useDispatch();
  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      email: id,
      pwd,
    };
    if (!isEmailForm(id)) {
      return setLoginSuccess({ success: false, message: LOGIN.ID_NOT_VALID });
    }
    const response = await fetch(`${API_SERVER}/login`, {
      method: 'post',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    const responseJson = await response.json();
    if (responseJson.success) {
      return dispatch(login());
    }
    return setLoginSuccess({ success: false, message: responseJson.data.message });
  };
  const onChangeid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangepwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  return (
    <S.LoginContainer>
      <Login
        onLogin={onLogin}
        onChangeid={onChangeid}
        onChangepwd={onChangepwd}
        id={id}
        pwd={pwd}
        isLogin={isLogin}
        oauthUrl={OAUTH_URL}
        loginSuccess={loginSuccess}
      />
    </S.LoginContainer>
  );
};

export default LoginContainer;
