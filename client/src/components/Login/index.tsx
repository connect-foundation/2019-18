import React from 'react';
import styled from 'styled-components';
import LoginInput from '../../basics/Input/LoginInput';
import PasswordInput from '../../basics/Input/PasswordInput';

import SubmitButton from '../../basics/Button/SubmitButton';
import NaverIcon from '../../assets/naver_login_white.png';
import CrafolioIcon from '../../assets/logo_white_larger.png';

const CrafolioLogoContainer = styled.div`
  display: flex;
  height: 13rem;
  width: 100%;
  justify-content: center;
`;
const CrafolioLogo = styled.img`
  background-image: url(${(props) => props.src})
  width: 10rem; 
  height: 13rem;
`;

const LoginNaverLogo = styled.img`
  background-image: url(${(props) => props.src})
  width: 2rem; 
  height: 2rem;
  margin : 0 0.7rem;
`;
const LoginBox = styled.div`
    margin-top : 6rem;
    height : 42 rem;
    width : 28rem;
    padding : 70px 50px; 
    border:1px #EFEFEF solid;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const MidLine = styled.div`
    padding-top : 0.2rem;
    display: flex;
    font-size: 0.8rem;
    font-style: bold;
    color : #999999;
`;
const Line = styled.hr`
    height: 2px;
    background-color : #EFEFEF;
    border:none;
    width : 9rem; 
`;
const OauthLine = styled.div`
    height: 2rem;
    display: flex;
    justify-content: center;
`;
const OauthContent = styled.div`
    color : #3DC727;
    line-height: 2.3rem;
    font-size: 0.9rem;
    font-weight: bold;
`;

interface LoginProp{
    onLogin: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onLogout: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    onChangeid: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    onChangepwd: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    id: string;
    pwd: string;
}


const Login:React.FC<LoginProp> = ({
  onLogin, onChangeid, onChangepwd, onLogout, id, pwd,
}) => (
  <LoginBox>
    <CrafolioLogoContainer>
      <CrafolioLogo src={CrafolioIcon} />
    </CrafolioLogoContainer>
    <LoginInput onChange={onChangeid} value={id} placeholder="이메일을 입력하세요" />
    <PasswordInput onChange={onChangepwd} value={pwd} placeholder="비밀번호를 입력하세요" />
    <SubmitButton onClick={onLogin}>로그인</SubmitButton>
    <MidLine>
      <Line />
      또는
      <Line />
    </MidLine>
    <OauthLine>
      <LoginNaverLogo src={NaverIcon} />
      <OauthContent>
        NAVER 으로 로그인
      </OauthContent>
    </OauthLine>
  </LoginBox>
);

export default Login;
