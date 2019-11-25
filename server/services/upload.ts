import WorkImage from '../models/workImage';

const create = (payload) => WorkImage.create(payload);

export {
  create,
};
