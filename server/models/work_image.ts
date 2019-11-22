import {
  Document, Schema, Model, model,
} from 'mongoose';

import { IWorkImage, IWorkImageContent } from '../interfaces/work_image';

const { ObjectId } = Schema.Types;
export interface IWorkImageModel extends IWorkImage, Document{}

const obj: IWorkImageContent = {
  type: '',
  content: '',
};

const workImageSchema = new Schema({
  owner: {
    type: ObjectId, required: true, unique: true,
  },
  title: { type: String, required: true },
  content: { type: [obj], required: true, default: [] },
  emoji: { type: [String], required: true, default: [] },
  comments: { type: [String], required: true, default: [] },
  comments_allow: { type: Boolean, required: true, default: true },
  ccl: { type: String, required: true },
  field: { type: String, required: true },
  public: { type: String, required: true, default: true },
  tags: { type: [String], required: true, default: [] },
  views: { type: Number, required: true, default: 0 },

});

const WorkImage:Model<IWorkImageModel> = model<IWorkImageModel>('WorkImage', workImageSchema);

export default WorkImage;
