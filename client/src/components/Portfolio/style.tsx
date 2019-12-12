import styled from 'styled-components';
import Img from '../../basics/Img';
import H3 from '../../basics/H3';
import { theme } from '../../style/theme';
import EmptyButton from '../../basics/emptyButton';

export const LongEmptyButton = styled(EmptyButton)`
  width:100%;
`;
export const Portfolio = styled.div``;
export const PortfolioBox = styled.div`
  display:flex;
  padding-left: 100px;
`;
export const PortfolioDetail = styled.div`
  width: 250px;  
  margin: 30px 10px 0px 0px; 
  padding-top: 12px;
`;
export const Name = styled(H3)`
  margin: 2px; 
  padding: 2px 0px 2px 4px;
  font-size: 20px; 
`;
export const PortfolioImage = styled(Img)`
  width: 60px;
  height: 60px; 
  margin: 35px 38px 30px 0;
  background-size:cover;
  background-position: center center;
`;
export const FollowLine = styled.div`
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 20px;
  color: ${theme.AMERICAN_RIVER};
`;
export const FollowNumber = styled.span`
  margin: 0 10px;
  font-weight: bold;
  color: black;
`;
export const IntroduceBox = styled.dl`
  padding-left:100px;
  padding-right:40px;
  font-size:14px;
  color: ${theme.AMERICAN_RIVER}
  text-indent: 0;
`;
export const Subject = styled.dt`
  border-top: 1px ${theme.BORDER_GRAY} solid;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 8px;
  font-size:14px;
  color: ${theme.AMERICAN_RIVER}
`;
export const Content = styled.dd`
  font-size:14px;
  color: black;
  padding: 0;
  margin:0;
`;
