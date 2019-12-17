import React from 'react';
import {
  Switch, Route, RouteComponentProps,
} from 'react-router-dom';

import FeedWorkContainer from '../../containers/FeedWorkContainer';
import FeedWallpaperContainer from '../../containers/FeedWallpaperContainer';
import FeedMusicContainer from '../../containers/FeedMusicContainer';

// import FeedMusic from '../FeedMusics';
import FeedNavigator from '../FeedNavigator';
import NotFound from '../../components/NotFound';

import WorkDetailContainer from '../../containers/WorkDetailContainer';
import MusicDetailContainer from '../../containers/MusicDetailContainer';
import UploadMainContainer from '../../containers/UploadMainContainer';

const Content = ({ match }: RouteComponentProps) => (
  <Switch>
    <Route path={`${match.path}/detail-image/:id`} component={WorkDetailContainer} />
    <Route path={`${match.path}/detail-music/:id`} component={MusicDetailContainer} />
    <Route path={`${match.path}/upload`} component={UploadMainContainer} />
    <Route path={`${match.path}`}>
      <Route path={`${match.path}`} component={FeedNavigator} />
      <Switch>
        <Route exact path={`${match.path}/works`} component={FeedWorkContainer} />
        <Route path={`${match.path}/wallpaper`} component={FeedWallpaperContainer} />
        <Route path={`${match.path}/music`} component={FeedMusicContainer} />
        <Route component={NotFound} />
      </Switch>
    </Route>
    <Route component={NotFound} />
  </Switch>
);
export default Content;
