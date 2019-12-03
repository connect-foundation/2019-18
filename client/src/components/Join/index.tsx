import React from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './style';

import CrafolioIcon from '../../assets/logo_white_larger.png';
import LoginInput from '../../basics/Input/LoginInput';
import PasswordInput from '../../basics/Input/PasswordInput';
import SubmitButton from '../../basics/SubmitButton';


interface JoinProp{
    onJoin: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangename: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangeemail: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwdcheck: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;

    pwd: string;
    name: string;
    email: string;
    pwdcheck: string;
    joinSuccess: boolean

}


const Join:React.FC<JoinProp> = ({
  onJoin, onChangename, onChangepwdcheck, onChangepwd, onChangeemail, name, pwd, email, pwdcheck, joinSuccess,
}) => (
  (joinSuccess)
    ? (<Redirect to="/login" />)
    : (
      <S.Join>
        <S.CrafolioLogoContainer to="/">
          <S.CrafolioLogo src={CrafolioIcon} />
        </S.CrafolioLogoContainer>
        <LoginInput onChange={onChangeemail} value={email} placeholder="이메일을 입력하세요" />
        <LoginInput onChange={onChangename} value={name} placeholder="이름을 입력하세요" />
        <PasswordInput onChange={onChangepwd} value={pwd} placeholder="비밀번호를 입력하세요" />
        <PasswordInput onChange={onChangepwdcheck} value={pwdcheck} placeholder="비밀번호를 다시 입력하세요" />
        <SubmitButton onClick={onJoin}>제출</SubmitButton>
      </S.Join>
    ));
export default Join;
