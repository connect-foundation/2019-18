import mongoose, {
  Document, Schema, Model, model, Mongoose,
} from 'mongoose';

import bcrypt from 'bcrypt';
import validator from 'validator';
import { IUser } from '../interfaces/user';
import {
  DEFAULT_ORIGIN_URL,
  DEFAULT_THUMBNAIL_URL,
} from '../utils/constant';

const Noti = new Schema({
  sender: { type: Schema.Types.ObjectId },
  ref: { type: Schema.Types.ObjectId },
  type: { type: String, enum: ['works', 'wallpapers', 'musics', 'comments'] },
  createdAt: { type: mongoose.Schema.Types.Date, default: Date.now },
  isRead: { type: Boolean, required: true, default: false },
});

export interface IUserModel extends IUser, Document{}
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
  email: {
    type: String, required: true, unique: true,
  },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  thumbnailUrl: { type: String, required: true, default: DEFAULT_THUMBNAIL_URL },
  originUrl: { type: String, required: true, default: DEFAULT_ORIGIN_URL },
  profile: { type: ObjectId, required: true, ref: 'Profile' },
  notifications: [{ type: Noti, required: true }],
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

userSchema.path('email').validate((value) => validator.isEmail(value), 'invalid email');

userSchema.pre<IUserModel>('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.pwd, salt);
  this.pwd = hash;
  next();
});

const User:Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
