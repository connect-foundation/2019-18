import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import response from '../utils/response';
import {
  findProfileByUserId,
} from '../services/profile';

const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.decodedUser) {
      return next(new Error('Not Login'));
    }
    const profile = await findProfileByUserId(req.decodedUser.email);
    return response(res, profile);
  } catch (e) {
    next(e);
  }
};
const sample = () => {};
export { getMyProfile, sample };
