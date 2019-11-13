import { Request, Response, NextFunction } from 'express';
import { loginService } from '../services/login';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, pwd } = req.body;
    const result = await loginService(email, pwd);
    return res.status(result.status).json({ token: result.token, msg: result.msg });
  } catch (e) {
    next(e);
  }
};

export { login };
