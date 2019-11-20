import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from '../components/Login';

import { login, logout } from '../modules/login/action';

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
