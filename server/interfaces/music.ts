import mongoose from 'mongoose';
import { IWorkMusicModel } from '../models/work_music';

export default interface IMusic {
  owner: mongoose.Types.ObjectId | IWorkMusicModel;
  creator: mongoose.Types.ObjectId;
  title: string;
  musicUrl: string;
  imageUrl: string;
  public : boolean;
  genres: string[];
  moods: string[];
  instruments: string[];
  ref: mongoose.Types.ObjectId[];
  createdAt: string;
  updatedAt: string;
}
