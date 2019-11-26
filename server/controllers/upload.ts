import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { workImageCreate, imageCreate, wallPaperCreate } from '../services/upload';

interface MulterFile {
    key: string,
    path: string,
    mimetype: string
    originalname: string
    size: number,
    screenShots: string,
}

const getUrl = async (req: Request & { files: MulterFile[] },
  res: Response, _next: NextFunction) => {
  const { files } = req;
  const objectStorageUrls = files.map(
    (element) => process.env.OS_TARGET_URL + element.key,
  );
  res.json({ objectStorageUrls });
};

interface ContentObject {
  type: string,
  content: string,
  file: File | null,
}

const uploadWorkImage = async (req: Request, res:Response, next: NextFunction) => {
  const { content } = req.body;

  const data = {
    ...req.body,
    owner: mongoose.Types.ObjectId(),
  };
  const result = await workImageCreate(data);
  console.log(result.id);
  const workImageId = result.id;
  console.log(data);

  content.forEach(async (element:ContentObject) => {
    if (element.type === 'image') {
      const imagePayload = {
        owner: workImageId,
        creator: mongoose.Types.ObjectId(),
        public: req.body.public,
        ref: [],
        url: element.content,
      };
      const reqult2 = await imageCreate(imagePayload);
      console.log(reqult2);
    } else if (element.type === 'wallpaper') {
      const wallpaperPayload = {
        owner: workImageId,
        creator: mongoose.Types.ObjectId(),
        public: req.body.public,
        url: element.content,
        downloads: 0,
      };
      const reqult2 = await wallPaperCreate(wallpaperPayload);
      console.log(reqult2);
    }
  });
};

export { getUrl, uploadWorkImage };
