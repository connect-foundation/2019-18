import React from 'react';
import { Link } from 'react-router-dom';

const Header:React.FC = () => (
  <div>
    <h1>
      <Link to="/">
            home
      </Link>
    </h1>
    <h1>
      <Link to="/login">
            login
      </Link>
    </h1>
    <h1>
      <Link to="/counter">
            counter
      </Link>
    </h1>
    <h1>
      <Link to="/todo">
            todo
      </Link>
    </h1>
  </div>
);

export default Header;
