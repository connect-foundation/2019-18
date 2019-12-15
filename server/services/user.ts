import User from '../models/user';
import { initProfile } from '../services/profile';

const create = async (payload) => {
  const result = await initProfile();
  const user = { profile: result._id, ...payload };
  return User.create(user);
};
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

const findById = async (_id) => {
  const result = await User.findOne({ _id });
  return result;
};


export {
  create,
  remove,
  isExist,
  findId,
  findById,
};
