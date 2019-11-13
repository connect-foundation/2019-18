import User from '../models/user';

const create = async (payload) => User.create(payload);

export {
  create,
};
