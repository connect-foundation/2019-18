import Image from '../models/image';

const get10Images = (skip, limit) => Image.find().select({ creator: 1, url: 1 }).skip(skip).limit(limit);

export {
  get10Images,
};
