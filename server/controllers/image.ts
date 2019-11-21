import { Request, Response, NextFunction } from 'express';
import { get10Images } from '../services/image';

const getImages = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const images = await get10Images(0, 10);
    return res.json(images);
  } catch (e) {
    next(e);
  }
};


export {
  getImages,
};
