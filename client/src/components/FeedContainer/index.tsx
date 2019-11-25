import React from 'react';
import {
  Switch, Route, BrowserRouter, RouteComponentProps,
} from 'react-router-dom';

import FeedWorks from '../FeedWorks';
import FeedWallpapers from '../FeedWallpapers';
import FeedMusic from '../FeedMusics';
import FeedNavigator from '../FeedNavigator';

const Content = ({ match }: RouteComponentProps) => {
  console.log(match);

  return (
    <BrowserRouter>
      <FeedNavigator />
      <Switch>
        <Route path={match.path} exact component={FeedWorks} />
        <Route path="/wallpaper" component={FeedWallpapers} />
        <Route path="/music" component={FeedMusic} />
      </Switch>
    </BrowserRouter>
  );
};

export default Content;
