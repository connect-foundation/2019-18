import {
  Document, Schema, Model, model,
} from 'mongoose';

import IProfile from '../interfaces/profile';
import User from './user';

export interface IProfileModel extends IProfile, Document{}

const { ObjectId } = Schema.Types;

const profileSchema = new Schema({
  owner: { type: ObjectId, required: true, ref: User },
  follower: { type: [ObjectId], required: false, ref: User },
  following: { type: [ObjectId], required: false, ref: User },
  introSimple: { type: String, required: true },
  introDetail: { type: String, required: true },
  activeFields: { type: [String], required: true },
  websiteUrl: { type: String, required: false },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });


const Profile:Model<IProfileModel> = model<IProfileModel>('Profile', profileSchema);

export default Profile;