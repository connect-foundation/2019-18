import Image from '../models/image';
import User from '../models/user';

const get10Images = (skip, limit) => Image.find()
  .select({ creator: 1, url: 1 })
  .skip(skip).limit(limit)
  .populate('creator', 'name email');

export {
  get10Images,
};
