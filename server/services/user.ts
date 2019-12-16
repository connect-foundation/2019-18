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

const findById = async (_id) => User.findOne({ _id });


const findFollower = (_id) => User.findById(_id).populate({
  path: 'profile',
  populate: { path: 'follower' },
});


const findFollowing = async (_id) => User.findById(_id).populate({
  path: 'profile',
  populate: { path: 'following' },
});

const getNotifications = async (_id) => User.findById(_id)
  .select('notifications')
  .populate({
    path: 'notifications.sender',
    populate: 'sender',
  })
  .populate({
    path: 'notifications.ref',
    populate: 'ref',
  });

export {
  create,
  remove,
  isExist,
  findId,
  findById,
  findFollower,
  findFollowing,
  getNotifications,
};
