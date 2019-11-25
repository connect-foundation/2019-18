import React from 'react';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import UploadMain from '../UploadMain';
import FeedWallpapers from '../FeedWallpapers';
import FeedMusic from '../FeedMusics';
import FeedWorks from '../FeedWorks';

const Content = () => (
  <Switch>
    <Route exact path="/upload" component={UploadMain} />
    <Route exact path="/wallpaper" component={FeedWallpapers} />
    <Route exact path="/music" component={FeedMusic} />
    <Route path="/" component={FeedWorks} />
  </Switch>
);

export default Content;
