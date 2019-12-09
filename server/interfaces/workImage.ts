import mongoose from 'mongoose';

export interface IMusic {
  title:string;
  musicUrl: string;
  imageUrl: string;
  genres: string[];
  moods: string[];
  instruments: string[];
}

export interface IWorkImageContent {
  type: string,
  content: [{
    type:string;
    content: [IMusic | string];
  }],
}

export interface IComments {
  owner: mongoose.Types.ObjectId,
  content: string,
  createdAt: mongoose.Schema.Types.Date,
}

export interface IWorkImage {
    owner: mongoose.Types.ObjectId,
    title: string,
    content: IWorkImageContent[],
    emoji: string[],
    comments: IComments[],
    commentsAllow: boolean,
    ccl: string,
    field: string,
    public:boolean,
    tags: string[],
    views: number,
}
