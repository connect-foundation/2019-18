import React from 'react';

import { createGlobalStyle } from 'styled-components';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';

import { ThemeProvider } from './style/typed-compoennts';
import { theme } from './style/theme';
import Home from './components/Home';

import Login from './components/Login';

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
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
