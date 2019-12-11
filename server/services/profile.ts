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
const setProfile = (id, payload) => Profile.update({ _id: id }, payload);
/*
const findProfileByUserId = async (id) => {
  const user = await User.findOne({ email: id });

  if (profile.length === 0) return undefined;
  return profile[0];
};
*/

export {
  create,
  findProfile,
  setProfile,
  initProfile,
};
