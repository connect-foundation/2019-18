import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { decodeJwt, getUserFromToken } from '../services/login';

type User={
  id : mongoose.Types.ObjectId,
  email: string,
  name: string,
  thumbnailUrl?: string,
  originUrl?: string,
  profile : mongoose.Types.ObjectId,
};

declare global {
    namespace Express {
        interface Request {
            decodedUser?: User;
        }
    }
}

const authByJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.cookies || !req.cookies.token) {
      next();
    }
    const decoded = await decodeJwt(req.cookies.token);
    const userdata:any = await getUserFromToken(decoded);
    if (userdata) {
      req.decodedUser = {
        id: userdata.id,
        email: userdata.email,
        name: userdata.name,
        originUrl: userdata.originUrl,
        thumbnailUrl: userdata.thumbnailUrl,
        profile: userdata.profile,
      };
    }
    next();
  } catch (e) {
    next(e);
  }
};

export default authByJWT;
