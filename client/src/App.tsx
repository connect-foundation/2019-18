import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ReactCookieProps, withCookies } from 'react-cookie';
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
// import {SetUserContainer} from './containers/SetUserContainer';
import { theme } from './style/theme';
import Home from './components/Home';

dotenv.config();
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};

    @font-face {
      font-family: 'Anton Regular';
      src: url('./style/fonts/Anton-Regular.woff') format('woff'); /* Modern Browsers */
      src: url('./style/fonts/Anton-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
      font-style: normal; 
      font-weight: 400;
    }
    font-family: "Anton Regular", sans-serif;
  }
`;

const App:React.FC<ReactCookieProps> = (props:ReactCookieProps) => {
  useEffect(()=>{
    console.log(props.cookies)
  });
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
  );
}

export default withCookies(App);
