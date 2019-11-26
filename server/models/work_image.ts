import mongoose, {
  Document, Schema, Model, model, Mongoose, SchemaType,
} from 'mongoose';
import User from './user';

import { IWorkImage, IWorkImageContent } from '../interfaces/workImage';

const { ObjectId } = Schema.Types;
export interface IWorkImageModel extends IWorkImage, Document{}

const obj: IWorkImageContent = {
  type: '',
  content: '',
};

const workImageSchema = new Schema({
  owner: {
    type: ObjectId, required: true, unique: true, ref: User,
  },
  title: { type: String, required: true },
  content: { type: [Schema.Types.Mixed], required: true, default: [] },
  emoji: { type: [String], required: true, default: [] },
  comments: { type: [String], required: true, default: [] },
  commentsAllow: { type: Boolean, required: true, default: true },
  ccl: { type: String, required: true },
  field: { type: String, required: true },
  public: { type: String, required: true, default: true },
  tags: { type: [String], required: true, default: [] },
  views: { type: Number, required: true, default: 0 },
});

const WorkImage:Model<IWorkImageModel> = model<IWorkImageModel>('WorkImage', workImageSchema);

export default WorkImage;
