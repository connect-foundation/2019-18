import React from 'react';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';

import UploadMain from '../UploadMain';
import FeedWallpapers from '../FeedWallpapers';
import FeedMusic from '../FeedMusics';
import FeedWorks from '../FeedWorks';
import WorkDetail from '../WorkDetail';

interface MatchParams {
  id: string;
}

const Content:React.FC<RouteComponentProps<MatchParams>> = ({ match }) => (
  <Switch>
    <Route exact path="/home/upload" component={UploadMain} />
    <Route exact path="/home/wallpaper" component={FeedWallpapers} />
    <Route exact path="/home/music" component={FeedMusic} />
    <Route path="/home/:id" component={WorkDetail} />
    <Route path="/home" component={FeedWorks} />
  </Switch>
);

export default withRouter(Content);
