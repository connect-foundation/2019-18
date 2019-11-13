import { Request, Response } from 'express';
import { create } from '../services/user';
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

export {
  signup,
};
