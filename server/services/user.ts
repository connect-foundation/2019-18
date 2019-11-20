import User from '../models/user';

const create = (payload) => User.create(payload);
const remove = (email) => User.deleteOne({ email });
const isExist = async (email) => {
  const result = await User.findOne({ email });
  if (!result) return false;
  return true;
};

export {
  create,
  remove,
  isExist,
};
