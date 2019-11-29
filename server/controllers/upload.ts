import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { workImageCreate, imageCreate, wallPaperCreate } from '../services/upload';

interface MulterFile {
    /**
     * MulterFile  interface 에서 사용하는 값은 'key' 밖에 없습니다.
     * 사용하지 않은 나머지 타입들은 삭제하는것이 좋을까요?
     */
    key: string,
    path: string,
    mimetype: string
    originalname: string
    size: number,
    screenShots: string,
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
  const { content } = req.body;

  const data = {
    ...req.body,
    owner: mongoose.Types.ObjectId(), // 임시 값입니다.
  };
  const result = await workImageCreate(data);
  const workImageId = result.id;

  content.forEach(async (element:ContentObject) => {
    if (element.type === 'image') {
      const imagePayload = {
        owner: workImageId,
        creator: mongoose.Types.ObjectId(),// 임시 값입니다.
        public: req.body.public,
        ref: [],
        url: element.content,
      };
      await imageCreate(imagePayload);
    } else if (element.type === 'wallpaper') {
      const wallpaperPayload = {
        owner: workImageId,
        creator: mongoose.Types.ObjectId(),// 임시 값입니다.
        public: req.body.public,
        url: element.content,
        downloads: 0,
      };
      await wallPaperCreate(wallpaperPayload);
    }
  });
  // workImageId 를 반환해야함. 그래야 게시글 상세 페이지로 redirect 가능
};

export { getUrl, uploadWorkImage };
