require('dotenv').config();

export const API_SERVER:string = process.env.NODE_ENV === 'production'
  ? `${process.env.REACT_APP_URL}/api/`
  : 'http://localhost:3050/api';


  type postProp = {
    TYPE: 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | undefined
  }

export const FEED_IMAGE_ADD_COMMENT = (id:string) => {
  const METHOD = 'POST';
  const ADDR = `${API_SERVER}/feed/images/${id}/add-comment`;
  return {
    METHOD,
    ADDR,
  };
};
