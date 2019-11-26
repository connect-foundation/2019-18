import mongoose, {
  Document, Schema, Model, model,
} from 'mongoose';

import User from './user';
import workImage from './work_image';
import IImage from '../interfaces/Image';

export interface IImageModel extends IImage, Document{}

const { ObjectId } = Schema.Types;

const imageSchema = new Schema({
  owner: { type: ObjectId, required: true, ref: workImage },
  creator: { type: ObjectId, required: true, ref: User },
  public: { type: Boolean, required: true, default: true },
  ref: { type: [ObjectId], required: true },
  url: { type: String, required: true },
});

const Image:Model<IImageModel> = model<IImageModel>('Image', imageSchema);

export default Image;
