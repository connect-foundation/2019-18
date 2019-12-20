import Image from '../models/image';
import Wallpaper from '../models/wallpaper';
import Music from '../models/music';
import WorkImage from '../models/work_image';
import WorkMusic from '../models/work_music';

const get10Images = (skip, limit) => Image.find()
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'emoji comments views title');

const getIdsImages = (id) => Image.find({ creator: id })
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'emoji comments views title');


const get10Wallpapers = (skip, limit) => Wallpaper.find()
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'emoji comments views title');

const getImageFeeds = (skip, limit) => Image.find()
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'emoji comments views title');

const get10Musics = (skip, limit) => Music.find()
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'comments views');

const getIdsMusics = (id) => Music.find({ creator: id })
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'comments views');


const getWorkImageById = (id) => WorkImage.findById(id).populate('owner', 'name');

const getWorkMusicById = (id) => WorkMusic.findById(id).populate('owner', 'name');

const addCommentToWorkImage = (_id, payload) => WorkImage.findOneAndUpdate(
  { _id },
  { $push: { comments: payload } },
  { new: true },
);

const addCommentToWorkMusic = (id, payload) => WorkMusic.findOneAndUpdate(
  { _id: id },
  { $push: { comments: payload } },
  { new: true },
);

const updateWorkImageView = (_id) => WorkImage.findOneAndUpdate(
  { _id },
  { $inc: { views: 1 } },
  { new: true },
);

const updateWorkMusicView = (_id) => WorkMusic.findOneAndUpdate(
  { _id },
  { $inc: { views: 1 } },
  { new: true },
);


export {
  get10Images,
  getIdsImages,
  get10Wallpapers,
  get10Musics,
  getIdsMusics,
  getImageFeeds,
  getWorkImageById,
  addCommentToWorkImage,
  addCommentToWorkMusic,
  getWorkMusicById,
  updateWorkImageView,
  updateWorkMusicView,
};
