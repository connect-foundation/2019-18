import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dotenv from 'dotenv';
import styled from 'styled-components';
import Login from '../components/Login';
import { API_SERVER } from '../utils/constants';
import { RootState } from '../modules';
import { login } from '../modules/login';

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
  const LoginUser = useSelector((state:RootState) => state.login);
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
    if (responseJson.userOid) {
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
    <Screen>
      <Login
        onLogin={onLogin}
        onChangeid={onChangeid}
        onChangepwd={onChangepwd}
        id={id}
        pwd={pwd}
        LoginUser={LoginUser}
      />
    </Screen>
  );
};

export default Content;
