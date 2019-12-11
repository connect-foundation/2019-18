import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import response from '../utils/response';
import { AUTH } from '../utils/messages';
import {
  setProfile, findProfile,
} from '../services/profile';


const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const profile = await findProfile(req.decodedUser.profile);
    if (!profile) {
      throw (createError(httpStatus.INTERNAL_SERVER_ERROR, ''));
    }
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
    await setProfile(req.decodedUser.profile, req.body);
    return response(res, {});
  } catch (e) {
    next(e);
  }
};
export { getMyProfile, setMyProfile };
