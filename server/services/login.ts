import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUserModel } from '../models/user';
import { IUser } from '../interfaces/user';


const saltRounds = 10;

const loginService = async (inputedEmail, pwd) => {
  const result = {
    status: 200,
    msg: '',
    token: null,
  };

  try {
    const query = User.findOne({ email: inputedEmail });
    const user = await query;

    if (!user) {
      result.status = 404;
      result.msg = '사용자를 찾을 수 없습니다.';
      return result;
    }

    const match = await bcrypt.compare(pwd, user.pwd);
    if (!match) {
      result.status = 422;
      result.msg = '비밀번호를 확인 해주세요.';
      return result;
    }

    const { _id, email } = user;
    const payload = { _id, email };
    const secret = process.env.JWT_SECRET;
    const ttl = 3600000;

    const token = jwt.sign(payload, secret, {
      expiresIn: ttl,
      issuer: 'jominji',
      subject: 'userInfo',
    });

    result.status = 200;
    result.msg = 'success login';
    result.token = token;
    return result;
  } catch (e) {
    throw Error('Error while Paginating Users');
  }
};

export { loginService };
