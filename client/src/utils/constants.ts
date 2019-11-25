require('dotenv').config();


export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api/`
  : 'http://localhost:3050/api';
