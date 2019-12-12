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
const findProfile = (id) => Profile.findOne({ _id: id });
const findProfileByUserId = async (id) => {
  const user = await User.findOne({ _id: id });
  if (!user) return null;
  const profile = await Profile.findOne({ _id: user.profile });
  return profile;
};
const setProfile = (id, payload) => Profile.update({ _id: id }, payload);


export {
  create,
  findProfile,
  findProfileByUserId,
  setProfile,
  initProfile,
};
