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
    <Route exact path="/home/upload" component={UploadMain} />
    <Route exact path="/home/wallpaper" component={FeedWallpapers} />
    <Route exact path="/home/music" component={FeedMusic} />
    <Route path="/home" component={FeedWorks} />
  </Switch>
);

export default Content;
