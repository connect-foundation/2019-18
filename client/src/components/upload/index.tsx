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

import ImageUpload from './ImageUpload';

function Upload() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  return (
    <div className="Upload-container">
      <Route exact path="/" component={Home} />
      <Route exact path="/upload/image" component={ImageUpload} />
      <Route exact path="/upload/music" component={Home} />
      <Route exact path="/upload/background" component={Home} />
      <Redirect from="*" to="/" />
    </div>
  );
}

function Home() {
  return (
    <div>
      <p> </p>
      <Link to="/upload/image">이미지</Link>
      <Link to="/upload/music">음악</Link>
      <Link to="/upload/background">배경화면</Link>
    </div>
  );
}


export default Upload;
