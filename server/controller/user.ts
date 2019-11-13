import { Request, Response } from 'express';
import { create, remove } from '../services/user';
import {
  DEFAULT_ORIGIN_URL,
  DEFAULT_THUMBNAIL_URL,
} from '../constant';

const signup = async (req: Request, res: Response) => {
  const data = {
    ...req.body,
    thumbnail_url: DEFAULT_THUMBNAIL_URL,
    origin_url: DEFAULT_ORIGIN_URL,
  };
  const user = await create(data);

  res.json(user);
};

const withdrawal = async (req:Request, res:Response) => {
  const { email } = req.body;
  const result = await remove(email);
  if (result.deletedCount !== 1) {
    // 삭제한 데이터 없음
    return res.json(false);
  }

  res.json(result);
};

export {
  signup,
  withdrawal,
};
