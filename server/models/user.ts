
import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user';
// const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, reuqired: true },
  pwd: { type: String, required: true },
});

userSchema.statics.findAll = function () {
  return this.find({});
};

userSchema.statics.create = function (payload:IUser) {
  const user = new this(payload);
  return user.save();
};

userSchema.statics.findById = function (id:String) {
  return this.findOne({ id });
};

// const model = mongoose.model('User', userSchema);

// export default model;

module.exports = mongoose.model('User', userSchema);
