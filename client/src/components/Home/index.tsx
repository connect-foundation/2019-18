import React from 'react';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import FeedContainer from '../FeedContainer';
import Login from '../Login';
import Header from '../Header';
import FeedNavigator from '../FeedNavigator';

const Home:React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <Header />
        <FeedNavigator />
        <FeedContainer />
      </Route>
    </Switch>
  </Router>
);

export default Home;
