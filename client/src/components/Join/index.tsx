import React from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './style';

import CrafolioIcon from '../../assets/logo_white_larger.png';
import LoginInput from '../../basics/Input/LoginInput';
import PasswordInput from '../../basics/Input/PasswordInput';
import SubmitButton from '../../basics/SubmitButton';
import { JoinProp } from './types';


const Join:React.FC<JoinProp> = ({
  onJoin, onChangeName, onChangePwdCheck, onChangePwd, onChangeEmail, name, pwd, email, pwdCheck, joinSuccess,
}) => (
  (joinSuccess)
    ? (<Redirect to="/login" />)
    : (
      <S.Join>
        <S.CrafolioLogoContainer to="/">
          <S.CrafolioLogo src={CrafolioIcon} />
        </S.CrafolioLogoContainer>
        <LoginInput onChange={onChangeEmail} value={email} placeholder="이메일을 입력하세요" />
        <LoginInput onChange={onChangeName} value={name} placeholder="이름을 입력하세요" />
        <PasswordInput onChange={onChangePwd} value={pwd} placeholder="비밀번호를 입력하세요" />
        <PasswordInput onChange={onChangePwdCheck} value={pwdCheck} placeholder="비밀번호를 다시 입력하세요" />
        <SubmitButton onClick={onJoin}>제출</SubmitButton>
        <S.HomeMidLine>
          <S.HomeLink to="/home">가입을 취소하고 홈으로</S.HomeLink>
        </S.HomeMidLine>
      </S.Join>
    ));
export default Join;
