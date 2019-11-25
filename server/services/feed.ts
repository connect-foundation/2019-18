import Image from '../models/image';
import Wallpaper from '../models/wallpaper';
import WorkImage from '../models/workImage';

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

const getImageFeeds = (skip, limit) => Image.find()
  .skip(skip)
  .limit(limit)
  .populate('creator', 'name thumbnailUrl')
  .populate('owner', 'emoji comments views title');


export {
  get10Images,
  get10Wallpapers,
  getImageFeeds,
};
