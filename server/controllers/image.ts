import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { get10Images } from '../services/image';
import response from '../utils/response';
import { IMAGE } from '../utils/messages';
import { IMAGE_CDN, WORKS, IMAGE_QUERY_LOW } from '../utils/constant';

import httpStatus = require('http-status');

const getImages = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const images = await get10Images(0, 10);

    const newimages = images.map((image) => {
      image.url = `${IMAGE_CDN}${WORKS}${image.url}${IMAGE_QUERY_LOW}`;
      return image;
    });
    return next(createError(422, IMAGE.NOT_FOUND_IMAGE));
    // return response(res, newimages);
    // return res.json(newimages);
  } catch (e) {
    next(e);
  }
};


export {
  getImages,
};
