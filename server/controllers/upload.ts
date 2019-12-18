import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status';
import {
  workImageCreate,
  imageCreate,
  wallPaperCreate,
  createMusic,
  createWorkMusic,
} from '../services/upload';
import {
  findFollower,
} from '../services/user';
import { AUTH, LOGIN } from '../utils/messages';
import { IMusicContent } from '../interfaces/workMusic';
import response from '../utils/response';
import { newWorksNotification } from '../socket';
import { IUserModel } from '../models/user';
import { NOTIFICATION_TYPE } from '../utils/constant';

interface MulterFile {
    key: string,
}

const getUrl = async (req: Request & { files: MulterFile[] },
  res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const { files } = req;
    const objectStorageUrls = files.map(
      (element) => {
        const [_pwd, filename] = element.key.split('/');
        return filename;
      },
    );
    res.json({ objectStorageUrls });
  } catch (e) {
    next(e);
  }
};

interface ContentObject {
  type: string,
  content: string,
  file: File | null,
}

const uploadWorkImage = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }
    const { content } = req.body;
    const data = {
      ...req.body,
      owner: user.id,
    };
    const result = await workImageCreate(data);
    const workImageId = result.id;
    const sender = await findFollower(user.id);
    if (!sender) {
      throw (createError(httpStatus.NOT_FOUND, LOGIN.ID_NOT_MATCH));
    }
    const { follower } = sender.profile! as any;
    const filteredFollowers = follower.map((filteredFollower) => {
      const {
        _id, email, name, thumbnailUrl, ...resizeTo
      } = filteredFollower;

      return {
        _id, email, name, thumbnailUrl,
      };
    });


    content.forEach(async (element:ContentObject) => {
      if (element.type === 'images') {
        const imagePayload = {
          owner: workImageId,
          creator: user.id,
          public: req.body.public,
          ref: [],
          url: element.content,
        };
        await imageCreate(imagePayload);
      } else if (element.type === 'wallpapers') {
        const wallpaperPayload = {
          owner: workImageId,
          creator: user.id,
          public: req.body.public,
          url: element.content,
          downloads: 0,
        };
        await wallPaperCreate(wallpaperPayload);
      }
    });


    newWorksNotification(sender, result, filteredFollowers, NOTIFICATION_TYPE.WORKS);
    res.json({ workImageId });
  } catch (e) {
    next(e);
  }
};


const uploadMusicFeed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.decodedUser;
    if (!user) {
      throw (createError(httpStatus.UNAUTHORIZED, AUTH.UNAUTHORIZED));
    }

    const { title, content } = req.body;
    const workMusicData = {
      title,
      content,
      owner: user.id,
      comments: [],
      commentsAllow: true,
      ccl: 'All Rights Reserved',
      field: '음악',
      public: true,
      tags: [],
      views: 0,
    };

    const newWorkMusic = await createWorkMusic(workMusicData);
    newWorkMusic.content.forEach(async (newMusicContent) => {
      if (newMusicContent.type === 'musics') {
        const musicContent = newMusicContent.content as IMusicContent;

        const newMusicData = {
          owner: newWorkMusic.id,
          creator: user.id,
          public: true,
          ref: [],
          ...musicContent,
        };

        const newMusic = await createMusic(newMusicData);
      }
    });

    response(res, newWorkMusic);
  } catch (e) {
    next(e);
  }
};
export {
  getUrl,
  uploadWorkImage,
  uploadMusicFeed,
};
