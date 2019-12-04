import React from 'react';
import { createGlobalStyle } from 'styled-components';
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
// import {SetUserContainer} from './containers/SetUserContainer';
import { theme } from './style/theme';
import Home from './components/Home';

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

export default App;
