import { getWorkDataMore, getWallpaperDataMore, getMusicDataMore } from './action';

export type FeedAction =
| ReturnType<typeof getWorkDataMore>
| ReturnType<typeof getWallpaperDataMore>
| ReturnType<typeof getMusicDataMore>

export interface IImage{
    _id: string;
    ownerId: string;
    creator:{
      _id: string,
      name: string,
      email: string,
      thumbnailUrl: string,
    };
    url: string;
    title:string;
    numOfComments:string;
    views: string;
    createdAt: number;
    updatedAt: number;
}

export interface IWallpaper{
  _id: string;
  ownerId:string;
  creator:{
    _id: string,
    name: string,
    email: string,
    thumbnailUrl: string,
  };
  url: string;
  title:string;
  numOfComments:string;
  views: string;
  createdAt: number;
  updatedAt: number;
}

export interface IMusic{
  _id: string;
  imageUrl: string;
  musicUrl: string;
  title:string;
  creator:{
    _id: string,
    name: string,
    thumbnailUrl: string,
  };
  ownerId: string;
  numOfComments:number;
  views: number;
  createdAt: string;
  updatedAt: string;
}


export type FeedState = {
  workData: IImage[];
  workSkippedNum: number;
  wallpaperData: IWallpaper[];
  wallpaperSkippedNum: number;
  musicData: IMusic[];
  musicSkippedNum: number;
}
