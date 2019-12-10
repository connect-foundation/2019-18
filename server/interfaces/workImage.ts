import mongoose from 'mongoose';


export interface IWorkImageContent {
  type: string,
  content: string;
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
