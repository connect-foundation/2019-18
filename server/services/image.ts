import Image from '../models/image';

const get10Images = (skip, limit) => Image.find().skip(skip).limit(limit);

export {
  get10Images,
};
