import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';

import dotenv from 'dotenv';
import Home from './components/Home';

dotenv.config();

const App: React.FC = () => (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
);

export default App;
