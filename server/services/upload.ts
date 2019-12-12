import WorkImage from '../models/work_image';
import Image from '../models/image';
import WallPaper from '../models/wallpaper';
import Music from '../models/music';
import WorkMusic from '../models/work_music';

const workImageCreate = (payload) => WorkImage.create(payload);
const imageCreate = (payload) => Image.create(payload);
const wallPaperCreate = (payload) => WallPaper.create(payload);
const createMusic = (payload) => Music.create(payload);
const createWorkMusic = (payload) => WorkMusic.create(payload);

export {
  workImageCreate,
  imageCreate,
  wallPaperCreate,
  createMusic,
  createWorkMusic,
};
