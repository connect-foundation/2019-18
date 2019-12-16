import Profile from '../models/profile';
import User from '../models/user';

const intialProfile = {
  activeFields: [],
};
const initProfile = () => Profile.create(
  {
    ...intialProfile,
  },
);
const create = (payload) => Profile.create(payload);
const findProfile = (_id) => Profile.findOne({ _id });
const findProfileByUserId = async (id) => {
  const user = await User.findOne({ _id: id });
  if (!user) return null;
  const profile = await Profile.findOne({ _id: user.profile });
  return profile;
};
const setProfile = (id, payload) => Profile.update({ _id: id }, payload);


const followingUpdate = (_id, following) => Profile.findOneAndUpdate({ _id }, { following });

const followerUpdate = async (_id, follower) => Profile.findOneAndUpdate({ _id }, { follower });

const findProfilePopulate = async (_id) => Profile.findById({ _id })
  .populate([{
    path: 'following',
    select: '_id thumbnailUrl name',
  },
  {
    path: 'follower',
    select: '_id thumbnailUrl name',
  },
  ]);

export {
  create,
  findProfile,
  findProfileByUserId,
  setProfile,
  initProfile,

  followingUpdate,
  followerUpdate,
  findProfilePopulate,
};
