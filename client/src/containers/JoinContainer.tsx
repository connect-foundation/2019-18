import React, { useState } from 'react';
import dotenv from 'dotenv';
import styled from 'styled-components';
import Join from '../components/Join';
import { API_SERVER } from '../utils/constants';

dotenv.config();

const Screen = styled.div`
  width:100%;
  height:100%; 
  display: flex;
  justify-items: center;
  justify-content: center;
`;

const Content:React.FC = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [name, setName] = useState('');


  const onJoin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pwd !== pwdCheck) { return; }
    const body = {
      email,
      pwd,
      name,
    };
    const response = await fetch(`${API_SERVER}/user/signup`, {
      method: 'post',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200) {
      return;
    }
    const responseJson = await response.json();
    console.log(responseJson);
  };

  const onChangename = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangepwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  const onChangepwdcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwdCheck(e.target.value);
  };
  const onChangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <Screen>
      <Join
        onJoin={onJoin}
        onChangeemail={onChangeemail}
        onChangepwdcheck={onChangepwdcheck}
        onChangepwd={onChangepwd}
        onChangename={onChangename}
        email={email}
        pwd={pwd}
        pwdcheck={pwdCheck}
        name={name}
      />
    </Screen>
  );
};

export default Content;
