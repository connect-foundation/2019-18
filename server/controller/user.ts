import { Request, Response } from 'express';
import { create, remove } from '../services/user';


const signup = async (req: Request, res: Response) => {
  const data = {
    ...req.body,
  };
  try {
    const user = await create(data);
    return res.json(user);
  } catch (e) {
    if (e.name === 'MongoError') {
      return res.json({ success: false, message: 'email is duplicated' });
    }
    if (e.name === 'ValidationError') {
      return res.json({ success: false, message: e.errors.email.message });
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
