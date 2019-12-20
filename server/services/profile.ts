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
  const profile = await User.findById(id)
    .populate({
      path: 'profile',
      populate: [
        {
          path: 'following',
          select: '_id thumbnailUrl name',
        },
        {
          path: 'follower',
          select: '_id thumbnailUrl name',
        },
      ],
    });
  return profile;
};
const setProfile = (id, payload) => Profile.update({ _id: id }, payload);


const followingUpdate = (_id, following) => Profile.findOneAndUpdate({ _id }, { following });

const followerUpdate = async (_id, follower) => Profile.findOneAndUpdate({ _id }, { follower });


export {
  create,
  findProfile,
  findProfileByUserId,
  setProfile,
  initProfile,
  followingUpdate,
  followerUpdate,
};
