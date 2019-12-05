import { Request, Response, NextFunction } from 'express';
import { decodeJwt, getUserFromToken } from '../services/login';
import { User } from '../customType/user';

declare global {
    namespace Express {
        interface Request {
            decodedUser?: User;
        }
    }
}

const jwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.token) {
      next();
    }
    const decoded = await decodeJwt(req.cookies.token);
    const userdata:any = await getUserFromToken(decoded);
    if (userdata) {
      req.decodedUser = {
        _id: userdata._id, email: userdata.email, name: userdata.name, originUrl: userdata.originUrl, thumbnailUrl: userdata.thumbnailUrl,
      };
    }
    next();
  } catch (e) {
    next(e);
  }
};

export default jwt;
