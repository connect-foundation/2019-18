import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user';

const loginService = async (inputedEmail, pwd) => {
  const result = {
    status: 200,
    msg: '',
    token: null,
    userOid: '',
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

    const {
      _id,
    } = user;
    const payload = { _id };
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
    result.userOid = _id;
    return result;
  } catch (e) {
    throw Error('Error while Paginating Users');
  }
};

const decodeJwt = async (token) => {
  const secret = process.env.JWT_SECRET;
  const p = new Promise(
    (resolve, reject) => {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        return resolve(decoded);
      });
    },
  );
  try {
    const result = await p;
    return result;
  } catch (err) {
    return '';
  }
};
const getUserFromToken = async (decodedToken) => {
  if (!decodedToken && !decodedToken._id) {
    return null;
  }
  const user = await User.findById(decodedToken._id);
  if (!user) {
    return null;
  }
  return user;
};

export { loginService, decodeJwt, getUserFromToken };
