import Profile from '../models/profile';

const intialProfile = {
  activeFields: [],
};
const initProfile = () => Profile.create(
  {
    ...intialProfile,
  },
);
const create = (payload) => Profile.create(payload);
const findProfileByUserId = async (id) => {
  const profile = await Profile.find({ owner: id });
  if (profile.length === 0) return undefined;
  return profile[0];
};
const setProfileByUserId = async (id, payload) => {
  await Profile.update({ owner: id }, payload);
};

export {
  create,
  findProfileByUserId,
  setProfileByUserId,
  initProfile,
};
