import User from '../models/user';
import Profile from '../models/profile';
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

const findProfile = async (_id) => {
  const result = await Profile.findById({ _id });
  return result;
};
const followingUpdate = async (_id, following) => {
  const result = await Profile.findOneAndUpdate({ _id }, { following });
  return result;
};

const followerUpdate = async (_id, follower) => {
  const result = await Profile.findOneAndUpdate({ _id }, { follower });
  return result;
};

const findProfilePopulate = async (_id) => {
  const result = await Profile.findById({ _id })
    .populate('following');
  return result;
};

export {
  create,
  remove,
  isExist,
  findId,
  findProfile,
  findById,
  followingUpdate,
  followerUpdate,
  findProfilePopulate,
};
