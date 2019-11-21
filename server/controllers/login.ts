import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/login';

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

export { login };
