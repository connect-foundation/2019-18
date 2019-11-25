import styled from 'styled-components';

export const CrafolioLogoContainer = styled.div`
  display: flex;
  height: 13rem;
  width: 100%;
  justify-content: center;
`;
export const CrafolioLogo = styled.img`
  background-image: url(${(props) => props.src})
  width: 10rem; 
  height: 13rem;
`;

export const LoginNaverLogo = styled.img`
  background-image: url(${(props) => props.src})
  width: 2rem; 
  height: 2rem;
  margin : auto 0.7rem;
`;
export const LoginBox = styled.div`
    margin-top : 6rem;
    height : 33rem;
    width : 28rem;
    padding : 20px 50px; 
    background-color :#343e7a;
    border:1px #EFEFEF solid;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const MidLine = styled.div`
    padding-top : 0.2rem;
    display: flex;
    font-size: 0.8rem;
    font-style: bold;
    color: #fbe99e;
`;
export const Line = styled.hr`
    height: 2px;
    background-color : #fbe99e;
    border:none;
    width : 9rem; 
`;
export const OauthLine = styled.div`
    height: 2.5rem;
    display: flex;
    justify-content: center;
    background-color : #fbe99e;
    border-radius: 2px;
`;
export const OauthContent = styled.div`
    color : #343e7a;
    line-height: 2.5rem;
    font-size: 0.9rem;
    font-weight: bold;
`;
