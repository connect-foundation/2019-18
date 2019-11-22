import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';

import UploadMain from '../UploadMain';

const Home:React.FC = () => (
  <Router>
    <Switch>
      <Route path="/upload" component={UploadMain} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Home;
