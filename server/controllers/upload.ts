import { Request, Response, NextFunction } from 'express';
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
  const objectStorageUrls = files.map((element) => process.env.OS_TARGET_URL + element.originalname);
  res.json({ objectStorageUrls });
};

const uploadWorkImage = async (req: Request, res:Response, next: NextFunction) => {
  const data = {
    ...req.body,
  };
  // console.log(data);
  // const result = await create(data);
  // model WorkImage 스키마 작성 + Insert 해야함
};

export { getUrl, uploadWorkImage };
