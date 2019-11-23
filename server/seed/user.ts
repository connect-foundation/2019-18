import mongoose from 'mongoose';

const users = [
  {
    _id: mongoose.Types.ObjectId(),
    email: 'suphremechicken@gmail.com',
    pwd: '1234',
    name: '신철헌',
  },
  {
    _id: mongoose.Types.ObjectId(),
    email: 'taristmas@gmail.com',
    pwd: '1234',
    name: 'junow',
  },
  {
    _id: mongoose.Types.ObjectId(),
    email: 'jominjimail@gmail.com',
    pwd: '1234',
    name: '조민지',
  },
];

export default users;
