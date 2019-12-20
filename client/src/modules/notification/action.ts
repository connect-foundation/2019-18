import { INotification } from './types';

export const SET_NOTIFICATION = 'notification/SET_NOTIFICATION' as const;
export const UPDATE_NOTIFICATION = 'notification/UPDATE_NOTIFICATION' as const;

export const setNotification = (notification: INotification) => ({
  type: SET_NOTIFICATION,
  payload: notification,
});
