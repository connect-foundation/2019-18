import React from 'react';
import {
  Redirect, Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import FeedContainer from '../FeedContainer';
import LoginContainer from '../../containers/LoginContainer';
import Header from '../Header';
import JoinContainer from '../../containers/JoinContainer';
import NotFound from '../../components/NotFound/index';

const Home:React.FC = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Header />
        <Route path="/home" component={FeedContainer} />
        {/* <FeedContainer /> */}
      </Route>
      <Route path="/login" component={LoginContainer} />
      <Route path="/join" component={JoinContainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Home;
