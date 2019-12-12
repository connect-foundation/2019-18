import mongoose from 'mongoose';

export interface IMusicContent {
  title:string;
  musicUrl: string;
  imageUrl: string;
  genres: string[];
  moods: string[];
  instruments: string[];
}


export interface IWorkMusicContent {
  type: string;
  content: IMusicContent | string;
}

export interface IComments {
  owner: mongoose.Types.ObjectId,
  content: string,
  createdAt: mongoose.Schema.Types.Date,
}

export interface IWorkMusic {
  owner: mongoose.Types.ObjectId,
  title: string,
  content: IWorkMusicContent[],
  comments: IComments[],
  commentsAllow: boolean,
  ccl: string,
  field: string,
  public: boolean,
  tags: string[],
  view: number;
}
