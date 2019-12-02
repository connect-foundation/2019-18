import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Login from '../components/Login';
import { API_SERVER, OAUTH_URL } from '../utils/constants';
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

const LoginContainer:React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const isLogin = useSelector((state:RootState) => state.login.isLogin);
  const dispatch = useDispatch();
  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      email: id,
      pwd,
    };
    const response = await fetch(`${API_SERVER}/login`, {
      method: 'post',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    const responseJson = await response.json();
    if (responseJson.success) {
      dispatch(login());
    }
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
      />
    </S.LoginContainer>
  );
};

export default LoginContainer;
