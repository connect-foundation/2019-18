import React from 'react';
import {
  Redirect, Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import FeedContainer from '../FeedContainer';
import LoginContainer from '../../containers/LoginContainer';
import Header from '../Header';
import FeedNavigator from '../FeedNavigator';
import JoinContainer from '../../containers/JoinContainer';

const Home:React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route path="/join" component={JoinContainer} />
      <Route path="/home">
        <Header />
        <FeedNavigator />
        <FeedContainer />
      </Route>
      <Redirect from="/*" to="/home" />
    </Switch>
  </Router>
);

export default Home;
