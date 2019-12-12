import mongoose, {
  Document, Schema, Model, model,
} from 'mongoose';

import User from './user';
import WorkMusic from './work_music';
import IMusic from '../interfaces/music';

export interface IMusicModel extends IMusic, Document{}

const { ObjectId } = Schema.Types;

const musicSchema = new Schema({
  owner: { type: ObjectId, required: true, ref: WorkMusic },
  creator: { type: ObjectId, required: true, ref: User },
  title: { type: String, required: true },
  musicUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  public: { type: Boolean, required: true, default: true },
  genres: { type: [String], required: true, default: [] },
  moods: { type: [String], required: true, default: [] },
  instruments: { type: [String], required: true, default: [] },
  ref: { type: [ObjectId], required: true },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

const Music:Model<IMusicModel> = model<IMusicModel>('Music', musicSchema);

export default Music;
