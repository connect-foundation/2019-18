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
<<<<<<< HEAD
dotenv.config();
=======

>>>>>>> 64e80fe04f2519edc97309139816df491acc1943
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
