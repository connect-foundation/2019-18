import WorkImage from '../models/work_image';
import Image from '../models/image';
import WallPaper from '../models/wallpaper';
import Music from '../models/music';
import WorkMusic from '../models/work_music';
import User from '../models/user';

const workImageCreate = (payload) => WorkImage.create(payload);
const imageCreate = (payload) => Image.create(payload);
const wallPaperCreate = (payload) => WallPaper.create(payload);
const createMusic = (payload) => Music.create(payload);
const createWorkMusic = (payload) => WorkMusic.create(payload);

const addNewNotification = (
  id, sender, ref, type, createdAt, isRead,
) => User.findByIdAndUpdate(id, {
  $push: {
    notifications: {
      sender,
      ref,
      type,
      createdAt,
      isRead,
    },
  },
});

export {
  workImageCreate,
  imageCreate,
  wallPaperCreate,
  createMusic,
  createWorkMusic,
  addNewNotification,
};
