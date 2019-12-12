import { getWorkDataMore, getWallpaperDataMore } from './action';

export type FeedAction =
| ReturnType<typeof getWorkDataMore>
| ReturnType<typeof getWallpaperDataMore>

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

export interface IWallpaper{
  _id: string;
  ownerId:string;
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


export type FeedState = {
  workData: IImage[];
  workSkippedNum: number;
  wallpaperData: IWallpaper[];
  wallpaperSkippedNum: number;
}
