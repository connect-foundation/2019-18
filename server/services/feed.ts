import Image from '../models/image';
import Wallpaper from '../models/wallpaper';

const get10Images = (skip, limit) => Image.find()
  .select({ creator: 1, url: 1 })
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name email');

const get10Wallpapers = (skip, limit) => Wallpaper.find()
  .select({ creator: 1, url: 1 })
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name email');

export {
  get10Images,
  get10Wallpapers,
};
