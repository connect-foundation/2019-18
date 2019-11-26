import {
  Document, Schema, Model, model,
} from 'mongoose';

import User from './user';
import IWallpaper from '../interfaces/wallpaper';
import WorkImage from './work_image';

export interface IWallpaperModel extends IWallpaper, Document{}

const { ObjectId } = Schema.Types;

const wallpaperSchema = new Schema({
  owner: { type: ObjectId, required: true, ref: WorkImage },
  creator: { type: ObjectId, required: true, ref: User },
  public: { type: Boolean, required: true, default: true },
  url: { type: String, required: true },
  downloads: { type: Number, required: true, default: 0 },
});

const Wallpaper:Model<IWallpaperModel> = model<IWallpaperModel>('wallpaper', wallpaperSchema);

export default Wallpaper;
