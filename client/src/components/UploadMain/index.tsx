import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UploadImage from '../UploadImage';
import Basicbox from '../Basicbox';
import * as S from './style';

function UploadMain() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  return (
    <div className="Upload-route-container">
      <Switch>
        <Route exact path="/upload" component={Home} />
        <Route path="/upload/image" component={UploadImage} />
        <Route path="/upload/music" component={Home} />
        <Route path="/upload/background" component={Home} />
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <S.LinkBox>
      <Link to="/upload/image"><Basicbox name="이미지" /></Link>
      <Link to="/upload/music"><Basicbox name="음악" /></Link>
      <Link to="/upload/background"><Basicbox name="배경화면" /></Link>
    </S.LinkBox>
  );
}


export default UploadMain;
