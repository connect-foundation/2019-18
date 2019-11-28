import Image from '../models/image';
import Wallpaper from '../models/wallpaper';
import WorkImage from '../models/work_image';

const get10Images = (skip, limit) => Image.find()
  .select({ creator: 1, url: 1 })
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name email');

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

const getWorkImageById = (id) => WorkImage.findById(id).populate('owner', 'name');

const addCommentToWorkImage = (id, payload) => WorkImage.findOneAndUpdate(
  { _id: id },
  { $push: { comments: payload } },
  { new: true },
);

export {
  get10Images,
  get10Wallpapers,
  getImageFeeds,
  getWorkImageById,
  addCommentToWorkImage,
};
