import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import Header from '../Header';
import FeedContainer from '../FeedContainer';

import Upload from '../upload';

const Home:React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/upload" component={Upload} />
      <Route path="/" exact component={FeedContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Home;
