import WorkImage from '../models/work_image';

const create = (payload) => WorkImage.create(payload);

export {
  create,
};
