import { setNotification } from './action';

export type NotificationAction =
| ReturnType<typeof setNotification>

export interface INoti {
  isRead: boolean;
  createdAt: number;
  _id: string;
  sender: string;
  ref: string;
  type: string;
}

export interface INotification {
  _id: string,
  notifications:INoti[];
}
