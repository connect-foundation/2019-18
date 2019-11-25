import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';

import dotenv from 'dotenv';
import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';
import Home from './components/Home';

import Login from './containers/LoginContainer';

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

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
