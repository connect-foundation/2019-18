import { Request, Response, NextFunction } from 'express';
import { get10Images } from '../services/image';

import { IMAGE_CDN, WORKS, IMAGE_QUERY_LOW } from '../utils/constant';

const getImages = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const images = await get10Images(0, 10);

    const newimages = images.map((image) => {
      image.url = `${IMAGE_CDN}${WORKS}${image.url}${IMAGE_QUERY_LOW}`;
      return image;
    });

    return res.json(newimages);
  } catch (e) {
    next(e);
  }
};


export {
  getImages,
};
