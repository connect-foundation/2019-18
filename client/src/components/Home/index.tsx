import React from 'react';
import {
  Redirect, Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { ReactCookieProps, withCookies } from 'react-cookie';
import FeedContainer from '../FeedContainer';
import LoginContainer from '../../containers/LoginContainer';
import Header from '../Header';
import JoinContainer from '../../containers/JoinContainer';
import CreatorContainer from '../../containers/CreatorContainer';
import NotFound from '../../components/NotFound/index';
import PortfolioFormContainer from '../../containers/PortfolioFormContainer';
import useUserState from '../../hooks/useUserState';

const Home:React.FC<ReactCookieProps> = (props:ReactCookieProps) => {
  useUserState(props);
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <Header />
          <Route path="/home" component={FeedContainer} />
        </Route>
        <Route path="/creator">
          <Header />
          <Switch>
            <Route path="/creator/form" component={PortfolioFormContainer} />
            <Route path="/creator" component={CreatorContainer} />
          </Switch>
        </Route>
        <Route path="/login" component={LoginContainer} />
        <Route path="/join" component={JoinContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default withCookies(Home);
