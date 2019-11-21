import {
  Schema,
} from 'mongoose';

interface IWorkImageContent {
  type: string,
  content: string,
}

interface IWorkImage{
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
    views: string,
}

export { IWorkImage, IWorkImageContent };
