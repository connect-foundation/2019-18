import { Request, Response, NextFunction } from 'express';
import { loginService, decodeJwt, getUserFromToken } from '../services/login';
import response from '../utils/response';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, pwd } = req.body;
    const result = await loginService(email, pwd);
    const userInfo = { userOid: '' };
    if (result.token !== null) {
      res.cookie('token', result.token);
      userInfo.userOid = result.userOid;
    }
    return res.status(result.status).json(userInfo);
  } catch (e) {
    next(e);
  }
};

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.token) {
      return response(res, 0, 404);
    }
    const decoded = await decodeJwt(req.cookies.token);
    return (decoded !== '') ? response(res, { decoded }) : response(res, {}, 404);
  } catch (e) {
    next(e);
  }
};

const whoAmI = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.token) {
      return response(res, 0, 404);
    }
    const decoded = await decodeJwt(req.cookies.token);
    const userdata = await getUserFromToken(decoded);
    console.log(userdata);
    return (userdata !== {}) ? response(res, userdata) : response(res, {}, 404);
  } catch (e) {
    next(e);
  }
};

export { login, authUser, whoAmI };
