import React, { useState } from 'react';
import styled from 'styled-components';
import Join from '../components/Join';
import { API_SERVER, JOIN } from '../utils/constants';


const S = {
  JoinContainer: styled.div`
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

const Content:React.FC = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [name, setName] = useState('');
  const [joinSuccess, setJoinSuccess] = useState({ result: false, message: '' });
  const onJoin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pwd !== pwdCheck) {
      return setJoinSuccess({
        result: false, message: JOIN.PASSWORD_DO_NOT_MATCH,
      });
    }
    if (!isEmailForm(email)) {
      return setJoinSuccess({
        result: false, message: JOIN.ID_NOT_VALID,
      });
    }

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

    const responseJson = await response.json();

    if (responseJson.success) {
      return setJoinSuccess({ result: true, message: '' });
    }
    return setJoinSuccess({ result: false, message: responseJson.data.message });
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
  console.log('render');
  console.log(joinSuccess);
  return (
    <S.JoinContainer>
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
        joinSuccess={joinSuccess}
      />
    </S.JoinContainer>
  );
};

export default Content;
