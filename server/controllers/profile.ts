import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import response from '../utils/response';
import { AUTH } from '../utils/messages';
import {
  findProfileByUserId, setProfileByUserId,
} from '../services/profile';


const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const profile = await findProfileByUserId(req.decodedUser.id);
    return response(res, profile);
  } catch (e) {
    next(e);
  }
};
const setMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser || req.decodedUser.email !== req.body.email) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    await setProfileByUserId(req.decodedUser.id, req.body);
    return response(res, {});
  } catch (e) {
    next(e);
  }
};
export { getMyProfile, setMyProfile };
