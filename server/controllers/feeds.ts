
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import response from '../utils/response';
import {
  get10Images,
  getIdsImages,
  get10Wallpapers,
  getImageFeeds,
  getWorkImageById,
  addCommentToWorkImage,
  getWorkMusicById,
  get10Musics,
  getIdsMusics,
  addCommentToWorkMusic,
} from '../services/feed';
import {
  IMAGE_CDN, IMAGES, WALLPAPERS, MUSICS, MUSIC_COVERS, IMAGE_QUERY_LOW, IMAGE_QUERY_HIGH, OS_TARGET_URL,
} from '../utils/constant';
import { FEED, AUTH } from '../utils/messages';
import { IMusicContent } from '../interfaces/workMusic';
import { IWorkMusicModel } from '../models/work_music';

const getImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const images = await getImageFeeds(0, 10);
    const filteredFeed = images.map((image: any) => {
      const newFeed = {
        id: image.id,
        url: `${IMAGE_CDN}${IMAGES}${image.url}${IMAGE_QUERY_LOW}`,
        ownerId: image.owner.id,
        numOfComments: image.owner.comments.length,
        views: image.owner.views,
        title: image.owner.title,
        creator: image.creator,
      };

      return newFeed;
    });

    return response(res, filteredFeed);
  } catch (e) {
    next(e);
  }
};
const getImagesById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const images = await getIdsImages(id);
    const filteredFeed = images.map((image: any) => {
      const newFeed = {
        id: image.id,
        url: `${IMAGE_CDN}${IMAGES}${image.url}${IMAGE_QUERY_LOW}`,
        ownerId: image.owner.id,
        numOfComments: image.owner.comments.length,
        views: image.owner.views,
        title: image.owner.title,
        creator: image.creator,
      };

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
    const newWallpapers = wallpapers.map((wallpaper:any) => {
      const newFeed = {
        _id: wallpaper._id,
        url: `${IMAGE_CDN}${WALLPAPERS}${wallpaper.url}${IMAGE_QUERY_LOW}`,
        ownerId: wallpaper.owner._id,
        numOfComments: wallpaper.owner.comments.length,
        views: wallpaper.owner.views,
        title: wallpaper.owner.title,
        creator: wallpaper.creator,
      };
      return newFeed;
    });

    return response(res, newWallpapers);
  } catch (e) {
    next(e);
  }
};

const getWorkImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const fakeCount = req.decodedUser ? 1 : 0;
    const workImage = await getWorkImageById(id);
    if (!workImage) {
      throw (createError(httpStatus.NOT_FOUND, FEED.NOT_FOUND_WORK_IMAGE));
    }
    workImage.views += fakeCount;
    workImage.content = workImage.content.map((el) => {
      if (el.type === 'description') {
        return el;
      }
      return {
        ...el,
        content: `${IMAGE_CDN}${el.type}/${el.content}${IMAGE_QUERY_HIGH}`,
      };
    });
    response(res, workImage);
  } catch (e) {
    next(e);
  }
};

const getWorkMusic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const fakeCount = req.decodedUser ? 1 : 0;
    const workMusic = await getWorkMusicById(id);
    if (!workMusic) {
      throw (createError(httpStatus.NOT_FOUND, FEED.NOT_FOUND_WORK_IMAGE));
    }
    workMusic.views += fakeCount;
    workMusic.content = workMusic.content.map((el) => {
      if (el.type === 'musics') {
        const musicContent = el.content as IMusicContent;
        musicContent.musicUrl = `${OS_TARGET_URL}${el.type}/${musicContent.musicUrl}`;
        musicContent.imageUrl = `${IMAGE_CDN}musicCovers/${musicContent.imageUrl}${IMAGE_QUERY_LOW}`;

        return {
          ...el,
          content: musicContent,
        };
      }
      return el;
    });

    response(res, workMusic);
  } catch (e) {
    next(e);
  }
};


const addComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const workImageId = req.params.id;
    const { content } = req.body;
    const payload = {
      owner: user.id,
      ownerThumbnail: user.thumbnailUrl,
      ownerName: user.name,
      content,
      createdAt: Date.now(),
    };
    const workImage = await addCommentToWorkImage(workImageId, payload);
    if (!workImage) {
      throw (createError(httpStatus.NOT_FOUND, FEED.NOT_ADD_COMMENT));
    }
    workImage.content = workImage.content.map((el) => {
      if (el.type === 'description') {
        return el;
      }
      return { ...el, content: `${IMAGE_CDN}${el.type}/${el.content}${IMAGE_QUERY_HIGH}` };
    });

    response(res, workImage);
  } catch (e) {
    next(e);
  }
};

const addMusicComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const workMusicId = req.params.id;
    const { content } = req.body;
    const payload = {
      owner: user.id,
      ownerThumbnail: user.thumbnailUrl,
      ownerName: user.name,
      content,
      createdAt: Date.now(),
    };
    const workMusic = await addCommentToWorkMusic(workMusicId, payload);

    if (!workMusic) {
      throw (createError(httpStatus.NOT_FOUND, FEED.NOT_ADD_COMMENT));
    }
    workMusic.content = workMusic.content.map((el) => {
      if (el.type === 'musics') {
        const musicContent = el.content as IMusicContent;
        musicContent.musicUrl = `${OS_TARGET_URL}${el.type}/${musicContent.musicUrl}`;
        musicContent.imageUrl = `${IMAGE_CDN}musicCovers/${musicContent.imageUrl}${IMAGE_QUERY_LOW}`;

        return {
          ...el,
          content: musicContent,
        };
      }
      return el;
    });

    response(res, workMusic);
  } catch (e) {
    next(e);
  }
};

const getMoreWallpapers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fixedNum, skippedNum } = req.params;
    if (typeof (+fixedNum) !== 'number' && typeof (+skippedNum) !== 'number') {
      throw (new Error('type error'));
    }
    const images = await get10Wallpapers(+skippedNum, +fixedNum);
    const filteredFeed = images.map((image: any) => {
      const newFeed = {
        id: image.id,
        url: `${IMAGE_CDN}${WALLPAPERS}${image.url}${IMAGE_QUERY_LOW}`,
        ownerId: image.owner.id,
        numOfComments: image.owner.comments.length,
        views: image.owner.views,
        title: image.owner.title,
        creator: image.creator,
        createdAt: image.createdAt,
        updatedAt: image.updatedAt,
      };
      return newFeed;
    });
    return response(res, filteredFeed);
  } catch (e) {
    next(e);
  }
};

const getMoreImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fixedNum, skippedNum } = req.params;
    if (typeof (+fixedNum) !== 'number' && typeof (+skippedNum) !== 'number') {
      throw (new Error('type error'));
    }
    const images = await get10Images(+skippedNum, +fixedNum);
    const filteredFeed = images.map((image: any) => {
      const newFeed = {
        id: image.id,
        url: `${IMAGE_CDN}${IMAGES}${image.url}${IMAGE_QUERY_LOW}`,
        ownerId: image.owner.id,
        numOfComments: image.owner.comments.length,
        views: image.owner.views,
        title: image.owner.title,
        creator: image.creator,
        createdAt: image.createdAt,
        updatedAt: image.updatedAt,
      };
      return newFeed;
    });
    return response(res, filteredFeed);
  } catch (e) {
    next(e);
  }
};

const getMoreMusics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fixedNum, skippedNum } = req.params;
    if (typeof (+fixedNum) !== 'number' && typeof (+skippedNum) !== 'number') {
      throw (new Error('type error'));
    }
    const musics = await get10Musics(+skippedNum, +fixedNum);
    const filteredFeed = musics.map(({
      _id, imageUrl, musicUrl, title, creator, owner, createdAt, updatedAt,
    }) => {
      const newFeed = {
        _id,
        imageUrl: `${IMAGE_CDN}${MUSIC_COVERS}${imageUrl}${IMAGE_QUERY_LOW}`,
        musicUrl: `${OS_TARGET_URL}${MUSICS}${musicUrl}`,
        title,
        creator,
        ownerId: (owner as IWorkMusicModel).id,
        numOfComments: (owner as IWorkMusicModel).comments.length,
        views: (owner as IWorkMusicModel).views,
        createdAt,
        updatedAt,
      };
      console.error(newFeed);
      return newFeed;
    });
    return response(res, filteredFeed);
  } catch (e) {
    next(e);
  }
};

const getMusicsById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const musics = await getIdsMusics(id);
    const filteredFeed = musics.map(({
      _id, imageUrl, musicUrl, title, creator, owner, createdAt, updatedAt,
    }) => {
      const newFeed = {
        _id,
        imageUrl: `${IMAGE_CDN}${MUSIC_COVERS}${imageUrl}${IMAGE_QUERY_LOW}`,
        musicUrl: `${OS_TARGET_URL}${MUSICS}${musicUrl}`,
        title,
        creator,
        ownerId: (owner as IWorkMusicModel).id,
        numOfComments: (owner as IWorkMusicModel).comments.length,
        views: (owner as IWorkMusicModel).views,
        createdAt,
        updatedAt,
      };
      console.error(newFeed);
      return newFeed;
    });
    return response(res, filteredFeed);
  } catch (e) {
    next(e);
  }
};

export {
  getImages,
  getImagesById,
  getWallpapers,
  getWorkImage,
  addComment,
  getMoreWallpapers,
  getMoreImages,
  getWorkMusic,
  addMusicComment,
  getMoreMusics,
  getMusicsById,
};
