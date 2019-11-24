import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import Header from '../Header';
import FeedContainer from '../FeedContainer';

import UploadMain from '../UploadMain';

const Home:React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/upload" component={UploadMain} />
      <Route path="/" exact component={FeedContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Home;
