import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Button = styled.button`
  cursor: pointer;
  font-size: 13px;
  color: ${theme.CRA_PURPLE};
  width: 100%;
  height: 100%;
  background: transparent;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${theme.CRA_PURPLE};
    color: white;
    box-shadow: ${theme.BOX_SHADOW};
  }
`;

export const Box = styled.div`
border: solid 1px #dde1e5; 
width: 130px;
height: 130px;
display: flex;
border-radius: 1px;
`;
