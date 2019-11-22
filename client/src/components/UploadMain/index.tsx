import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UploadImage from '../UploadImage';
import Basicbox from '../Basicbox';
import * as S from './styles';

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
        <Route exact path="/upload" component={Main} />
        <Route path="/upload/image" component={UploadImage} />
      </Switch>
    </div>
  );
}

function Main() {
  return (
    <S.Div className="Upload-link-container">
      <Link to="/upload/image"><Basicbox name="이미지" /></Link>
      <Link to="/upload/music"><Basicbox name="음악" /></Link>
      <Link to="/upload/background"><Basicbox name="배경화면" /></Link>
    </S.Div>
  );
}

export default UploadMain;
