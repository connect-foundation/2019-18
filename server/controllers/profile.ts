import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import response from '../utils/response';
import {
  findProfileByUserId, setProfileByUserId,
} from '../services/profile';

const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      return next(new Error('Not Login'));
    }
    const profile = await findProfileByUserId(req.decodedUser.id);
    return response(res, profile);
  } catch (e) {
    next(e);
  }
};
const setMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      return next(new Error('Not Login'));
    }
    if (req.decodedUser.email !== req.body.email) {
      return next(new Error('비정상적인 접근입니다.'));
    }
    await setProfileByUserId(req.decodedUser.id, req.body);
    return response(res, {});
  } catch (e) {
    next(e);
  }
};
export { getMyProfile, setMyProfile };
