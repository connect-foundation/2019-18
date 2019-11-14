import {
  Document, Schema, Model, model,
} from 'mongoose';


import { IUser } from '../interfaces/user';

// const mongoose = require('mongoose');
export interface IUserModel extends IUser, Document{
  auth(pwd:string):boolean;
}
const userSchema = new Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  name: { type: String, required: true },
  thumbnail_url: { type: String, required: true },
  origin_url: { type: String, required: true },
});

userSchema.methods.auth = function (pwd) {
  return this.pwd === pwd;
};
const User:Model<IUserModel> = model<IUserModel>('User', userSchema);

export default User;
