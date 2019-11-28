require('dotenv').config();

export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api`
  : 'http://localhost:3050/api';

// OAUTH URL
const CLIENT_ID = `${process.env.REACT_APP_clientID}`;
const OAUTH_REDIRECT_URL:string = `${API_SERVER}/oauth/callback`;
const STATE = 'RAMDOM_STATE';

export const OAUTH_URL:string = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  CLIENT_ID
}&redirect_uri=${
  OAUTH_REDIRECT_URL
}&state=${
  STATE
}`;
