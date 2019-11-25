import mongoose from 'mongoose';

export interface IWorkImageContent {
  type: string,
  content: string,
}

export interface IWorkImage {
    owner: mongoose.Types.ObjectId,
    title: string,
    content: IWorkImageContent[],
    emoji: string[],
    comments: string[],
    commentsAllow: boolean,
    ccl: string,
    field: string,
    public:boolean,
    tags: string[],
    views: number,
}
