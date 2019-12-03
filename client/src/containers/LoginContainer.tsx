import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Login from '../components/Login';
import { API_SERVER, OAUTH_URL, LOGIN } from '../utils/constants';
import { RootState } from '../modules';
import { login } from '../modules/login';
import PopupWarn from '../commons/Popup_warn';


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
  const [showPopupWARN, setShowPopupWARN] = useState(false);
  const [popupText, setPopupText] = useState('');
  const isLogin = useSelector((state:RootState) => state.login.isLogin);
  const dispatch = useDispatch();
  const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const body = {
      email: id,
      pwd,
    };
    if (!isEmailForm(id)) {
      setPopupText(LOGIN.ID_NOT_VALID);
      return setShowPopupWARN(true);
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
    setPopupText(responseJson.data.message);
    return setShowPopupWARN(true);
  };
  const onChangeid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangepwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };
  const togglePopup = () => {
    setShowPopupWARN(false);
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
      {showPopupWARN && <PopupWarn text={popupText} closePopup={togglePopup} />}
    </S.LoginContainer>
  );
};

export default LoginContainer;
