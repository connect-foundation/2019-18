import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Button = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  margin-top: 10px;
  text-decoration: none;
  background: ${theme.CRA_PURPLE};
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  text-align: center;
  width: 180px;
  height: 40px;

  :hover{
    background: ${theme.PALE_CRA_PURPLE};
  }
`;
