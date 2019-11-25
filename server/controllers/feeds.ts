
import { Request, Response, NextFunction } from 'express';
import response from '../utils/response';
import { get10Images, get10Wallpapers, getImageFeeds } from '../services/feed';
import {
  IMAGE_CDN, WORKS, WALLPAPERS, IMAGE_QUERY_LOW,
} from '../utils/constant';

const getImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const images = await get10Images(0, 10);
    const newimages = images.map((image) => {
      image.url = `${IMAGE_CDN}${WORKS}${image.url}${IMAGE_QUERY_LOW}`;
      return image;
    });

    return response(res, newimages);
  } catch (e) {
    next(e);
  }
};

const getWallpapers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wallpapers = await get10Wallpapers(0, 10);
    const newWallpapers = wallpapers.map((wallpaper) => {
      wallpaper.url = `${IMAGE_CDN}${WALLPAPERS}${wallpaper.url}${IMAGE_QUERY_LOW}`;
      return wallpaper;
    });

    return response(res, newWallpapers);
  } catch (e) {
    next(e);
  }
};

const test = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const feeds = await getImageFeeds(0, 10);
    return response(res, feeds);
  } catch (e) {
    next(e);
  }
};
export {
  getImages,
  getWallpapers,
  test,
};
