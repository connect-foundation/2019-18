import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Button = styled.button`
  display: inline-block;
  border: none;
  margin: 0;
  margin-top: 0.8rem;
  text-decoration: none;
  background: ${theme.CRA_PURPLE};
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  text-align: center;
  width: 10rem;
  height: 2.5rem;
  :hover{
    background: ${theme.PALE_CRA_PURPLE};
  };
`;
