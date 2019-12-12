import express, { NextFunction, Request, Response } from 'express';
import socketOpen from 'socket.io';
import index from './routes';
import response from './utils/response';

require('dotenv').config();

import cors = require('cors');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import connect = require('./config/mongo');
import createError = require('http-errors');


const app = express();

app.set('jwt-secret', process.env.JWT_SECRET);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const corsConfig = {
  origin: ['http://localhost:3000'],
  credentials: true,
};
app.use(cors(corsConfig));

connect();

app.use('/', index);

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');

  next({ ...err, status: 404 });
});

app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  let apiError = err;
  if (!err.status) {
    apiError = createError(err);
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(apiError);
  }
  // set locals, only providing error in development
  res.locals.message = apiError.message;
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {};

  // render the error page
  return response(res, {
    message: apiError.message,
  }, apiError.status);
});

module.exports = app;
