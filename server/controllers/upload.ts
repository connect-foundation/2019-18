import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { create } from '../services/upload';

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
  console.log(objectStorageUrls);
  res.json({ objectStorageUrls });
};

const uploadWorkImage = async (req: Request, res:Response, next: NextFunction) => {
  const data = {
    ...req.body,
    owner: mongoose.Types.ObjectId(),
  };
  console.log(data);
  const result = await create(data);
  console.log(result);
};

export { getUrl, uploadWorkImage };
