import { Request, Response, NextFunction } from 'express';
import { loginService, decodeJwt, getUserFromToken } from '../services/login';
import response from '../utils/response';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, pwd } = req.body;
    const result = await loginService(email, pwd);
    if (result.token !== null) {
      res.cookie('token', result.token);
    }
    return response(res, {}, result.status);
  } catch (e) {
    next(e);
  }
};


const whoAmI = async (req: Request, res: Response, next: NextFunction) => {
  let userdata = {};
  if (req.decodedUser) {
    userdata = { user: req.decodedUser };
  }
  return (userdata) ? response(res, userdata) : response(res, {}, 404);
};

export { login, whoAmI };
