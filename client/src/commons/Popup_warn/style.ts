import styled from 'styled-components';
import { theme } from '../../style/theme';

export const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 300px;
  height: auto;
  background: ${theme.background};
  padding: 30px 20px;

  label{
    margin-bottom: 10px;
  }
`;
