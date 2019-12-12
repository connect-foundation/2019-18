import styled from 'styled-components';
import { theme } from '../../style/theme';
import { Button as PurpleButton } from '../../basics/PURPLE_Button/style';
import EmptyButton from '../../basics/emptyButton';
import Img from '../../basics/Img';

export const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.5);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: ${theme.background};
  padding: 5px;
`;
export const SubjectArea = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px; 
  border-bottom: 1px ${theme.BORDER_GRAY} solid;
  height: 30px; 
`;
export const Subject = styled.h3`
  margin: 0 auto;
`;
export const ShortPurpleButton = styled(PurpleButton)`
  width: auto;
  height: 25px;
`;

export const FollowArea = styled.div`
  display: flex; 
  flex-direction: column;
  margin-top : 20px;
  padding: 0px 15px;
`;

export const FollowMember = styled.div`
  width : 100%;
  height: 40px;
  border-bottom: 1px ${theme.BORDER_GRAY} solid;
  padding-top: 5px;
  margin: 0px;
  display: flex;
`;
export const FollowButton = styled(EmptyButton)`
  margin:auto 0;
  margin-left:auto;
`;
export const ProfileImage = styled(Img)`
  width: 30px;
  height: 30px; 
  background-size:cover;
  background-position: center center;
  margin: auto 0;

`;
export const FollowName = styled.div`
  margin: auto 10px;
`;


export const Inner = styled.div`
  margin: 100px auto;
  poaition:absolute
  top: 200px;
  display: flex;
  flex-direction: column;
  width: 450px;
  background: ${theme.background};
  padding: 0px 20px 30px 20px;
`;
