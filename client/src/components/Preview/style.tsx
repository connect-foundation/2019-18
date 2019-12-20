import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 1.5rem;
`;
export const Img = styled.img`
  display: flex;
  width:100%;
  height: auto;
  :hover{
    outline: 2px solid ${theme.AMERICAN_RIVER};
  }
`;
