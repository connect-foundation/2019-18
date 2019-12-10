import { getWorkData, getWorkDataMore, increaseSkippedNum } from './action';

export type FeedWorkAction =
| ReturnType<typeof getWorkData>
| ReturnType<typeof getWorkDataMore>
| ReturnType<typeof increaseSkippedNum>

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
