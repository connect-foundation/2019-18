import React from 'react';
import { createGlobalStyle } from 'styled-components';
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';
import Home from './components/Home';
import GlobalStyle from './style/globalStyle';
import useUserState from './hooks/useUserState';

dotenv.config();

const App:React.FC = (props) => {
  useUserState(props);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
