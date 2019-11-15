import User from '../models/user';

const create = (payload) => User.create(payload);
const remove = (email) => User.deleteOne({ email });

export {
  create,
  remove,
};