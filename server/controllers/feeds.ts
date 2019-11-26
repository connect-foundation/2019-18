
import { Request, Response, NextFunction } from 'express';
import response from '../utils/response';
import { get10Images, get10Wallpapers, getImageFeeds } from '../services/feed';
import {
  IMAGE_CDN, IMAGES, WALLPAPERS, IMAGE_QUERY_LOW,
} from '../utils/constant';

const getImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const feeds = await getImageFeeds(0, 10);
    const filteredFeed = feeds.map((feed: any) => {
      const newFeed = {
        _id: '',
        url: '',
        owner: '',
        numOfComments: '',
        views: '',
        title: '',
        creator: '',
      };
      newFeed._id = feed._id;
      newFeed.url = `${IMAGE_CDN}${IMAGES}${feed.url}${IMAGE_QUERY_LOW}`;
      newFeed.owner = feed.owner;
      newFeed.numOfComments = feed.owner.comments.length;
      newFeed.views = feed.owner.views;
      newFeed.title = feed.owner.title;
      newFeed.creator = feed.creator;
      return newFeed;
    });

    return response(res, filteredFeed);
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


export {
  getImages,
  getWallpapers,
};
