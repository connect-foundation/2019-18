import React from 'react';
import {
  Switch, Route, RouteComponentProps,
} from 'react-router-dom';

import UploadMain from '../UploadMain';
import FeedWallpapers from '../FeedWallpapers';
import FeedMusic from '../FeedMusics';
import FeedWorks from '../FeedWorks';
import FeedNavigator from '../FeedNavigator';
import NotFound from '../../components/NotFound';

import WorkDetailContainer from '../../containers/WorkDetailContainer';
import MusicDetailContainer from '../../containers/MusicDetailContainer';

const Content = ({ match }: RouteComponentProps) => (
  <Switch>
    <Route path={`${match.path}/detail-image/:id`} component={WorkDetailContainer} />
    <Route path={`${match.path}/detail-music/:id`} component={MusicDetailContainer} />
    <Route path={`${match.path}/upload`} component={UploadMain} />
    <Route path={`${match.path}`}>
      <Route path={`${match.path}`} component={FeedNavigator} />
      <Switch>
        <Route exact path={`${match.path}/works`} component={FeedWorks} />
        <Route path={`${match.path}/wallpaper`} component={FeedWallpapers} />
        <Route path={`${match.path}/music`} component={FeedMusic} />
        <Route component={NotFound} />
      </Switch>
    </Route>
    <Route component={NotFound} />
  </Switch>
);
export default Content;
