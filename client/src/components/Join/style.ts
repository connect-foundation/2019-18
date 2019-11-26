import styled from 'styled-components';
import { theme } from '../../style/theme';
import Line from '../../basics/Line';
import StyledLink from '../../basics/StyledLink';

export const Screen = styled.div`
  width:100%;
  height:100%; 
  display: flex;
  justify-items: center;
  justify-content: center;
`;
export const CrafolioLogoContainer = styled.div`
  display: flex;
  height: 15rem;
  width: 100%;
  justify-content: center;
`;
export const CrafolioLogo = styled.img`
  background-image: url(${(props) => props.src})
  width: 10rem; 
  height: 13rem;
`;

export const JoinBox = styled.div`
    margin-top : 4rem;
    height : 38rem;
    width : 28rem;
    padding : 20px 50px; 
    background-color :${theme.CRA_PURPLE};
    border:1px ${theme.CRA_PURPLE} solid;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const LoginMidLine = styled.div`
    padding-top : 0.2rem;
    display: flex;
    font-size: 0.8rem;
    font-style: bold;
    color: ${theme.CRA_YELLOW};
`;
export const LoginLine = styled(Line)`
    background-color : ${theme.CRA_YELLOW};
    width : 9rem; 
`;
export const OauthLine = styled.div`
    height: 2.5rem;
    display: flex;
    justify-content: center;
    background-color : ${theme.CRA_YELLOW};
    border-radius: 2px;
`;
export const OauthContent = styled.div`
    color : ${theme.CRA_PURPLE};
    line-height: 2.5rem;
    font-size: 0.9rem;
    font-weight: bold;
`;
export const JoinLink = styled(StyledLink)`
   line-height: 2.5rem;
   text-decoration: none;
   margin : auto
   color: white;
`;
