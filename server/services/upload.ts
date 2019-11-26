import WorkImage from '../models/work_image';
import Image from '../models/image';
import WallPaper from '../models/wallpaper';

const workImageCreate = (payload) => WorkImage.create(payload);
const imageCreate = (payload) => Image.create(payload);
const wallPaperCreate = (payload) => WallPaper.create(payload);

export {
  workImageCreate,
  imageCreate,
  wallPaperCreate,
};
