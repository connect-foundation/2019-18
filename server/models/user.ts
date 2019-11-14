import {
  Document, Schema, Model, model,
} from 'mongoose';

import bcrypt from 'bcrypt';
import validator from 'validator';
import { IUser } from '../interfaces/user';
import {
  DEFAULT_ORIGIN_URL,
  DEFAULT_THUMBNAIL_URL,
} from '../constant';

export interface IUserModel extends IUser, Document{}

const userSchema = new Schema({
  email: {
    type: String, required: true, unique: true,
  },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  thumbnail_url: { type: String, required: true, default: DEFAULT_THUMBNAIL_URL },
  origin_url: { type: String, required: true, default: DEFAULT_ORIGIN_URL },
});

userSchema.path('email').validate((value) => validator.isEmail(value), 'invalid email');

userSchema.pre<IUserModel>('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.pwd, salt);
  this.pwd = hash;
  next();
});

const User:Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
