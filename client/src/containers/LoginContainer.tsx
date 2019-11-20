import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dotenv from 'dotenv';
import Login from '../components/Login';
import { login, logout } from '../modules/login/action';

dotenv.config();

const Content:React.FC = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      email: id,
      pwd,
    };
    const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });

    // 로그인 실패
    if (response.status !== 200) {
      console.log('로그인 실패');
      return;
    }
    const responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
    dispatch(login(responseJson.user));
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
    <Login
      onSubmit={onSubmit}
      onLogout={onLogout}
      onChangeid={onChangeid}
      onChangepwd={onChangepwd}
    />
  );
};

export default Content;
