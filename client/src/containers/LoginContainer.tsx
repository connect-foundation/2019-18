import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import dotenv from 'dotenv';
import Cookies from 'js-cookie';
import styled from 'styled-components';
import Login from '../components/Login';
import { login, logout } from '../modules/login/action';

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

  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      email: id,
      pwd,
    };
    const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
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
=======
import Login from '../components/Login';

import { login } from '../modules/login/action';

const Content:React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // const body = {
    //   email: 'test@gmail.com',
    //   pwd: '1234',
    // };
    // fetch('localhost:3050/login', {

    //   method: 'post',
    //   body: JSON.stringify(body),
    // }).then((response) => response.json()).then((data) => {
    //   console.log(data);
    // });
    const user = {
      email: 'test@gmail.com',
      name: 'test',
      thumbnailUrl: 'test',
    };
    dispatch(login(user));
  };

>>>>>>> 64e80fe04f2519edc97309139816df491acc1943
  const onChangeid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangepwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  return (
<<<<<<< HEAD
    <Screen>
      <Login
        onLogin={onLogin}
        onLogout={onLogout}
        onChangeid={onChangeid}
        onChangepwd={onChangepwd}
        id={id}
        pwd={pwd}
      />
    </Screen>
=======
    <Login
      onSubmit={onSubmit}
      onChangeid={onChangeid}
      onChangepwd={onChangepwd}
    />
>>>>>>> 64e80fe04f2519edc97309139816df491acc1943
  );
};

export default Content;
