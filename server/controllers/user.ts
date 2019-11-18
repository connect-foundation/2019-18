import { Request, Response } from 'express';
import { create, remove } from '../services/user';

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

    return res.json(user);
  } catch (e) {
    if (e.name === 'MongoError') {
      return res.json({ success: false, message: '이미 사용중인 이메일입니다.' });
    }
    return res.json({ success: false, message: 'unknown error' });
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

export {
  signup,
  withdrawal,
};
