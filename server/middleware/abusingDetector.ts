import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import { updateWorkImageView, updateWorkMusicView } from '../services/feed';

const imageSet = new Set();
const musicSet = new Set();

const splitPath = (path: string) => {
  const splitedPath = path.split('/');
  return splitedPath[splitedPath.length - 2];
};

const makeKey = (userId: any, postId: string):string => (userId as string) + postId;

const abusingDetector = (req: Request, res: Response, next: NextFunction) => {
  const user = req.decodedUser;
  if (!user) {
    return next();
  }
  const userId: ObjectId = user.id;
  const { id } = req.params;
  const type = splitPath(req.path);
  const key = makeKey(userId, id);

  if (type === 'workimage') {
    if (imageSet.has(key)) {
      return next();
    }
    imageSet.add(key);
    setTimeout(async () => {
      await updateWorkImageView(id);
      imageSet.delete(key);
    }, 60000);
  } else {
    if (musicSet.has(key)) {
      return next();
    }
    musicSet.add(key);
    setTimeout(async () => {
      await updateWorkMusicView(id);
      musicSet.delete(key);
    }, 60000);
  }
  return next();
};

export default abusingDetector;
