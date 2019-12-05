import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { workImageCreate, imageCreate, wallPaperCreate } from '../services/upload';

interface MulterFile {
    key: string,
}

const getUrl = async (req: Request & { files: MulterFile[] },
  res: Response, next: NextFunction) => {
  try {
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
    const { content } = req.body;
    const data = {
      ...req.body,
      owner: mongoose.Types.ObjectId(),
    };
    const result = await workImageCreate(data);
    const workImageId = result.id;

    content.forEach(async (element:ContentObject) => {
      if (element.type === 'images') {
        const imagePayload = {
          owner: workImageId,
          creator: mongoose.Types.ObjectId(),
          public: req.body.public,
          ref: [],
          url: element.content,
        };
        await imageCreate(imagePayload);
      } else if (element.type === 'wallpapers') {
        const wallpaperPayload = {
          owner: workImageId,
          creator: mongoose.Types.ObjectId(),
          public: req.body.public,
          url: element.content,
          downloads: 0,
        };
        await wallPaperCreate(wallpaperPayload);
      }
    });
    res.json({ workImageId });
  } catch (e) {
    next(e);
  }
};

export { getUrl, uploadWorkImage };
