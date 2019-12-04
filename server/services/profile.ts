
import Profile from '../models/profile';

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
const updateByUserId = (userId, payload) => Profile.update({ owner: userId }, payload);
export {
  create,
  updateByUserId,
  initProfile,
};
