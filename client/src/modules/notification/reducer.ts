import {
  SET_NOTIFICATION,
} from './action';

import {
  NotificationAction, INoti, INotification,
} from './types';

const initialState: INotification = {
  _id: '',
  notifications: [],
};

function notification(state: INotification = initialState, action: NotificationAction) {
  switch (action.type) {
    case SET_NOTIFICATION: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export default notification;
