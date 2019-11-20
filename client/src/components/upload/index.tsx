import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import ImageUpload from './ImageUpload';
import Test from './Test';
import Basicbox from './Basicbox';

const U = {
  Div: styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 150px;
  justify-content: space-around;
  border: 2px solid palevioletred;
  `,
};

function Upload() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  return (
    <div className="Upload-route-container">
      <Route exact path="/" component={Home} />
      <Route exact path="/upload/image" component={ImageUpload} />
      <Route exact path="/upload/music" component={Home} />
      <Route exact path="/upload/background" component={Home} />
      <Route exact path="/test" component={Test} />
      <Redirect from="*" to="/" />
    </div>
  );
}

function Home() {
  return (
    <U.Div className="Upload-link-container">
      <Link to="/upload/image"><Basicbox name="이미지" /></Link>
      <Link to="/upload/music"><Basicbox name="음악" /></Link>
      <Link to="/upload/background"><Basicbox name="배경화면" /></Link>
    </U.Div>
  );
}


export default Upload;
