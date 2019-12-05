import React from 'react';
<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
=======
import { ReactCookieProps, withCookies } from 'react-cookie';
>>>>>>> 0769a64a05e5daf8553d3260d10eb74e2f8517e2
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';
import Home from './components/Home';
<<<<<<< HEAD

dotenv.config();
const GlobalStyle = createGlobalStyle`
  html{
    height : 100%;
  }
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
    height: 100%;
    @font-face {
      font-family: 'Anton Regular';
      src: url('./style/fonts/Anton-Regular.woff') format('woff'); /* Modern Browsers */
      src: url('./style/fonts/Anton-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
      font-style: normal; 
      font-weight: 400;
    }
    font-family: "Anton Regular", sans-serif;
  }
  div#root{
    height: 100%;
    display:flex;
    flex-direction: column;
  }
`;

const App:React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
=======
import useUserState from './hooks/useUserState';
import GlobalStyle from './style/globalStyle';

dotenv.config();

const App:React.FC<ReactCookieProps> = (props:ReactCookieProps) => {
  useUserState(props);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
>>>>>>> 0769a64a05e5daf8553d3260d10eb74e2f8517e2

export default App;
