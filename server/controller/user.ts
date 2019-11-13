import { Request, Response } from 'express';
import { create, remove } from '../services/user';


const signup = async (req: Request, res: Response) => {
  const data = {
    ...req.body,
  };
  try {
    const user = await create(data);
    res.json(user);
  } catch (e) {
    res.json({ success: false, message: 'email is duplicated' });
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
