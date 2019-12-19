import { Request, Response, NextFunction } from 'express';
import { updateWorkImageView } from '../services/feed';

interface readContentType {
    key: string,
    value: Date,
}

function diffSeconds(dt2: Date, dt1: Date) {
  const startTime = new Date(dt1);
  const endTime = new Date(dt2);
  const diff = (endTime.getTime() - startTime.getTime()) / 1000;
  const diffRound = Math.abs(Math.round(diff));
  return diffRound <= 60;
}

const viewUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const user = req.decodedUser;
    if (!user) {
      return next();
    }
    if (!req.cookies.read_content) {
      const content:readContentType = { key: id, value: new Date() };
      const documenet:readContentType[] = [content];
      await updateWorkImageView(id);
      res.cookie('read_content', documenet, { maxAge: 60000, httpOnly: true });
      return next();
    }

    if (req.cookies.read_content) {
      const now = new Date();
      let findFlag = false;
      const timeFiltered = req.cookies.read_content.filter((element: readContentType) => {
        if (diffSeconds(element.value, now)) {
          return element;
        }
      });
      const update = timeFiltered.map((element: readContentType) => {
        if (element.key === id) {
          findFlag = true;
          const content:readContentType = { key: id, value: now };
          return content;
        }
      });
      if (!findFlag) {
        const content:readContentType = { key: id, value: now };
        const documenet:readContentType[] = [update, content];
        await updateWorkImageView(id);
        res.cookie('read_content', documenet, { maxAge: 60000, httpOnly: true });
      }
      next();
    }
  } catch (e) {
    next(e);
  }
};

export default viewUpdate;
