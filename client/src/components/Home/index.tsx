import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect, RouteComponentProps,
} from 'react-router-dom';
import Header from '../Header';
import FeedContainer from '../FeedContainer';

import Upload from '../upload';

const Home = ({ match }:RouteComponentProps) => {
  console.log(match);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={FeedContainer} />
        <Route path="/upload" component={Upload} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Home;
