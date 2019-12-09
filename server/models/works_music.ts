import mongoose, {
  Document,
  Schema,
  Model,
  model,
} from 'mongoose';

import User from './user';

const { ObjectId } = Schema.Types;
export interface IWorkMusicModel extends Document{}

const workMusicSchame = new Schema({
  owner: {
    type: ObjectId, required: true, unique: true, ref: User,
  },
  title: { type: String, required: true },
  content: { type: [Schema.Types.Mixed], required: true, default: [] },
  comments: { type: [Schema.Types.Mixed], required: true, default: [] },
  commentsAllow: { type: Boolean, required: true, default: true },
  ccl: { type: String, required: true },
  field: { type: String, required: true },
  public: { type: String, required: true, default: true },
  tags: { type: [String], required: true, default: [] },
  views: { type: Number, required: true, default: 0 },
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

const WorkMusic:Model<
