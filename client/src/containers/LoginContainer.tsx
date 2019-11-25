import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dotenv from 'dotenv';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import Login from '../components/Login';
import { login, logout } from '../modules/login/action';
import { API_SERVER } from '../utils/constants';
import { RootState } from '../modules';

dotenv.config();

const Screen = styled.div`
  width:100%;
  height:100%; 
  display: flex;
  justify-items: center;
  justify-content: center;
`;
const Content:React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');


  const dispatch = useDispatch();
  const userOid = useSelector((state:RootState) => state.login.userOid);

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

    // 로그인 실패
    if (response.status !== 200) {
      return;
    }
    const responseJson = await response.json();
    dispatch(login(responseJson));
  };

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };
  const onChangeid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangepwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  return (
    <Screen>
      <Login
        onLogin={onLogin}
        onLogout={onLogout}
        onChangeid={onChangeid}
        onChangepwd={onChangepwd}
        id={id}
        pwd={pwd}
        oid={userOid}
      />
    </Screen>
  );
};

export default Content;
