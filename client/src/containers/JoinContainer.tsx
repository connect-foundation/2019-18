import React, { useState } from 'react';
import styled from 'styled-components';
import Join from '../components/Join';
import { API_SERVER, JOIN } from '../utils/constants';
import PopupWarn from '../commons/Popup_warn';


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
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [showPopupWARN, setShowPopupWARN] = useState(false);
  const [popupTEXT, setPopupTEXT] = useState('');

  const onJoin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (pwd !== pwdCheck) {
      setPopupTEXT(JOIN.PASSWORD_DO_NOT_MATCH);
      return setShowPopupWARN(true);
    }
    if (!isEmailForm(email)) {
      setPopupTEXT(JOIN.ID_NOT_VALID);
      return setShowPopupWARN(true);
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
      setShowPopupWARN(false);
      return setJoinSuccess(true);
    }

    setPopupTEXT(responseJson.data.message);
    return setShowPopupWARN(true);
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
  const togglePopup = () => {
    setShowPopupWARN(false);
  };
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
      {showPopupWARN && <PopupWarn text={popupTEXT} closePopup={togglePopup} />}
    </S.JoinContainer>
  );
};

export default Content;
