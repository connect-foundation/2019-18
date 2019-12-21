import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import {
  create, remove, getNotifications, updateUserImgUrl,
} from '../services/user';
import response from '../utils/response';
import { PARAMS, AUTH, LOGIN } from '../utils/messages';
import { IMAGE_QUERY_LOW, IMAGE_PROFILE_THUB } from '../utils/constant';

interface MulterFile {
  key: string,
}

const { validationResult } = require('express-validator');

const signup = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, message: '올바른 이메일 형식이 아닙니다.' });
  }

  const data = {
    ...req.body,
  };
  try {
    const user = await create(data);
    if (!user) {
      throw new Error('user가 정상적으로 생성되지 않음');
    }
    return response(res);
  } catch (e) {
    if (e.name === 'MongoError') {
      return response(res, { message: '이미 사용중인 이메일입니다' }, 500);
    }
    return response(res, { message: 'unknown error' }, 500);
  }
};

const withdrawal = async (req:Request, res:Response) => {
  const { email } = req.body;
  const result = await remove(email);
  if (result.deletedCount !== 1) {
    // 삭제한 데이터 없음
    return res.json(false);
  }

  return res.json(result);
};

const getNoti = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw createError(httpStatus[400], PARAMS.NOT_CORRECT_PARAMS);
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createError(httpStatus[400], PARAMS.NOT_CORRECT_PARAMS);
    }

    const notifications = await getNotifications(id);
    if (!notifications) {
      throw createError(httpStatus.NOT_FOUND, PARAMS.NOT_CORRECT_PARAMS);
    }

    response(res, notifications);
  } catch (e) {
    next(e);
  }
};

const updateImg = async (req: Request & { files: MulterFile[] },
  res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const { files } = req;
    const target = files[0];
    const originUrl = process.env.CDN_URL + target.key + IMAGE_QUERY_LOW;
    const thumbnailUrl = process.env.CDN_URL + target.key + IMAGE_PROFILE_THUB;
    await updateUserImgUrl(user.id, originUrl, thumbnailUrl);
  } catch (e) {
    next(e);
  }
};

export {
  signup,
  withdrawal,
  getNoti,
  updateImg,
};
