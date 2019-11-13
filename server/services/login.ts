import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const saltRounds = 10;

const loginService = async (email, pwd) => {
  const result = {
    status: 200,
    msg: '',
    token: null,
  };

  const user = await User.findOne({ email });

  if (!user) {
    result.status = 404;
    result.msg = '사용자를 찾을 수 없습니다.';
    return result;
  }

  //   const match = await bcrypt.compare(pwd, user.pwd);
  const match = (pwd == user.pwd);
  if (!match) {
    result.status = 422;
    result.msg = '비밀번호를 확인 해주세요.';
    return result;
  }

  const payload = { email: user.email, name: user.name };
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
};

export { loginService };
