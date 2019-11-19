import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background: ${theme.background};
    font-family: sans-serif;
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export default App;
