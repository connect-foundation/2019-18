import {
  Schema,
} from 'mongoose';

export interface IWorkImageContent {
  type: string,
  content: string,
}

export interface IWorkImage {
    owner: Schema.Types.ObjectId,
    title: string,
    content: [IWorkImageContent],
    emoji: [string],
    comments: [string],
    commentsAllow: boolean,
    ccl: string,
    field: string,
    public:string,
    tags: [string],
    views: number,
}
