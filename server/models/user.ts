import {
  Document, Schema, Model, model,
} from 'mongoose';

import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user';

interface IUserModel extends IUser, Document{
}
const userSchema = new Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  thumbnail_url: { type: String, required: true },
  origin_url: { type: String, required: true },
});

userSchema.pre<IUserModel>('save', async function (next) {
  // this.pwd = `${this.pwd} pre`;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.pwd, salt);
  this.pwd = hash;
  next();
});

const User:Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
