import React from 'react';
import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';
import Home from './components/Home';

import useUserState from './hooks/useUserState';
import GlobalStyle from './style/globalStyle';

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
