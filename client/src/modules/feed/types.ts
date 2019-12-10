import { getWorkDataMore } from './action';

export type FeedWorkAction =
| ReturnType<typeof getWorkDataMore>

export interface IImage{
    _id: string;
    ownerId: string;
    creator:{
      _id: string,
      name: string,
      email: string,
    };
    url: string;
    title:string;
    numOfComments:string;
    views: string;
}

export type FeedWorkState = {
  data: IImage[];
  skippedNum: number;
}
