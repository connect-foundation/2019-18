import { setNotification } from './action';

export type NotificationAction =
| ReturnType<typeof setNotification>

export interface ISender{
  _id: string;
  createdAt: string;
  email: string;
  name: string;
  notifications: any
  originUrl: string;
  profile: string;
  thumbnailUrl: string;
  updatedAt:number;
}

export interface IRef{
  ccl: string;
  comments: any;
  commentsAllow: boolean;
  content: any;
  createdAt: number;
  emoji: any;
  field: string;
  owner: string;
  public: boolean
  tags: any;
  title: string;
  updatedAt: number;
  views: number;
  _id: string;
}

export interface INoti {
  isRead: boolean;
  createdAt: number;
  _id: string;
  sender: ISender;
  ref: IRef;
  type: 'works' | 'musics' | 'wallpapers';
}

export interface INotification {
  _id: string,
  notifications:INoti[];
}
