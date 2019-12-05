import Profile from '../models/profile';
import User from '../models/user';

const intialProfile = {
  introSimple: '한줄소개',
  introDetail: '상세소개입니다',
  activeFields: ['캘리그라피'],
};

const initProfile = (userId) => Profile.create(
  {
    owner: userId,
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
  console.log(payload);
  console.log(id);
  await Profile.update({ owner: id }, payload);
};

export {
  create,
  findProfileByUserId,
  setProfileByUserId,
  initProfile,
};
