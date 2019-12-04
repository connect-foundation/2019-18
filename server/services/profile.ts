import Profile from '../models/profile';
import User from '../models/user';

const intialProfile = {
  introSimple: '한줄소개',
  introDetail: '상세소개입니다',
  activeFields: '',
};

const initProfile = (userId) => Profile.create(
  {
    owner: userId,
    ...intialProfile,
  },
);
const create = (payload) => Profile.create(payload);
const findProfileByUserId = async (emailId) => {
  const user = await User.find({ email: emailId }, { _id: 1 });
  if (user.length === 0) return {};
  const profile = await Profile.find({ owner: user[0]._id });
  if (profile.length === 0) return {};
  return profile[0];
};

export {
  create,
  findProfileByUserId,
  initProfile,
};
