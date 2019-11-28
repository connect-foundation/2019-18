import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Box = styled.div`
  display: flex;
  max-width: 750px;
  height: auto;
  margin-top: 30px;
`;
export const Img = styled.img`
  display: flex;
  width:100%;
  height: auto;
  :hover{
    outline: 2px solid ${theme.AMERICAN_RIVER};
  }
`;
