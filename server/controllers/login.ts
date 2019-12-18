import { Request, Response, NextFunction } from 'express';
import { loginService, decodeJwt, getUserFromToken } from '../services/login';
import response from '../utils/response';
import { LOGIN } from '../utils/messages';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, pwd } = req.body;
    const result = await loginService(email, pwd);
    if (result.token !== null) {
      res.cookie('token', result.token, { expires: new Date(Date.now() + 900000), httpOnly: true });
      res.cookie('isLogin', result.token, { expires: new Date(Date.now() + 900000) });
    }
    return response(res, { message: LOGIN.LOGIN_FAILURE }, result.status);
  } catch (e) {
    next(e);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token');
    res.clearCookie('isLogin');
    return response(res);
  } catch (e) {
    next(e);
  }
};

const whoAmI = async (req: Request, res: Response, next: NextFunction) => {
  let userdata;
  if (req.decodedUser) {
    userdata = { user: req.decodedUser };
  }
  return (userdata) ? response(res, userdata) : response(res, {}, 404);
};

export { login, whoAmI, logout };
