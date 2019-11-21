import express, { NextFunction, Request, Response } from 'express';
import index from './routes';

import cors = require('cors');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import connect = require('./config/mongo');

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
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
