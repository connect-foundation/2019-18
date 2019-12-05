import User from '../models/user';

const create = (payload) => User.create(payload);
const remove = (email) => User.deleteOne({ email });
const isExist = async (email) => {
  const result = await User.findOne({ email });
  if (!result) return false;
  return true;
};

const findId = async (email) => {
  const result = await User.findOne({ email });
  return result;
};

export {
  create,
  remove,
  isExist,
  findId,
};
