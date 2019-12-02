import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ReactCookieProps, withCookies } from 'react-cookie';
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
// import {SetUserContainer} from './containers/SetUserContainer';
import { theme } from './style/theme';
import Home from './components/Home';
import useUserState from './hooks/useUserState';

dotenv.config();
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
  }
`;

const App:React.FC<ReactCookieProps> = (props:ReactCookieProps) => {
  useUserState(props);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default withCookies(App);
