import { Request, Response, NextFunction } from 'express';
import { Query } from 'mongoose';
import { IUser } from '../interfaces/user';
// import User from '../models/user';

const User = require('../models/user');

const sayHi = (req: Request, res: Response, next: NextFunction) => {
  res.json('hihi');
};

const findAll = (req:Request, res: Response) => {
  User
    .findAll()
    .then((users:Array<IUser>) => {
      if (!users.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${users}`);
    })
    .catch((err:Object) => res.status(500).send(err));
};

const login = (req: Request, res:Response) => {
  const { id, pwd } = req.body;
  User.findById(id)
    .then((user:IUser) => {
      if (!user) return res.json({ success: false, message: 'id not found' });
      if (user.pwd === pwd) return res.json({ success: true });
      return res.json({ success: false, message: 'pwd is not correct' });
    })
    .catch((err:Object) => {
      res.json(`error!${err}`);
    });
};

const signup = (req: Request, res: Response, next: NextFunction) => {
  User.create(req.body)
    .then((user:IUser) => {
      res.json({ success: true });
    })
    .catch((err:Object) => {
      res.json(`error!${err}`);
    });
};

export {
  sayHi,
  findAll,
  signup,
  login,
};
