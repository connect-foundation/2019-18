import {
  Document, Schema, Model, model,
} from 'mongoose';

import IProfile from '../interfaces/profile';
import User from './user';

export interface IProfileModel extends IProfile, Document{}

const { ObjectId } = Schema.Types;

// type temp = {
//   id: Schema.Types.ObjectId,
// }

const profileSchema = new Schema({
  follower: { type: [{ type: Schema.Types.ObjectId, ref: User }], required: false },
  following: { type: [{ type: Schema.Types.ObjectId, ref: User }], required: false },
  introSimple: { type: String, required: false, default: '' },
  introDetail: { type: String, required: false, default: '' },
  activeFields: { type: [String], required: true },
  websiteUrl: { type: String, required: false },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });


const Profile:Model<IProfileModel> = model<IProfileModel>('Profile', profileSchema);

export default Profile;
