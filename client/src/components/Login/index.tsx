import React from 'react';
import LoginInput from '../../basics/Input/LoginInput';
import SubmitButton from '../../basics/Button/SubmitButton';
import Img from '../../basics/Img';
import NaverIcon from '../../assets/naver_login_white.png';

interface LoginProp{
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onLogout: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangeid: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  }

const Login:React.FC<LoginProp> = ({
  onSubmit, onChangeid, onChangepwd, onLogout,
}) => (
  <div>
    <LoginInput />
    <SubmitButton>로그인</SubmitButton>
    <Img src={NaverIcon} />
    <input onChange={onChangeid} />
    <input onChange={onChangepwd} />
    <button type="button" onClick={onSubmit}>LOGIN</button>
    <button type="button" onClick={onLogout}>LOGOUT</button>
  </div>
);

export default Login;
