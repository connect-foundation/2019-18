import User from '../models/user';

const create = async (payload) => User.create(payload);
const remove = async (email) => User.deleteOne({ email });

export {
  create,
  remove,
};
