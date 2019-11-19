import React from 'react';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';


import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>

);

export default App;
