import mongoose from 'mongoose';
import { user as userId, profile as profileId, workImage as workImageId } from './ids';

const users = [
  {
    _id: userId[0],
    email: 'suphremechicken@gmail.com',
    pwd: '1234',
    name: '신철헌',
    profile: profileId[0],
    notifications: [],
  },
  {
    _id: userId[1],
    email: 'taristmas@gmail.com',
    pwd: '1234',
    name: 'junow',
    profile: profileId[1],
    notifications: [{
      sender: userId[0],
      ref: workImageId[0],
      type: 'works',
      isRead: false,
      onModel: 'WorkImage',
    }],
  },
  {
    _id: userId[2],
    email: 'jominjimail@gmail.com',
    pwd: '1234',
    name: '조민지',
    profile: profileId[2],
    notifications: [],
  },
];

export default users;
