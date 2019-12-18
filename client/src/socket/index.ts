import socketOpen from 'socket.io-client';
import { loginUser } from '../modules/login';
import { socketUrl } from '../utils/constants';
import { INotification } from '../modules/notification';

const socket = socketOpen(socketUrl!, { transports: ['websocket'] });

function sendMySocketID(userState:loginUser) {
  socket.emit('userInfo', userState);
}

interface newWorksNotificationProp{
  newNotifications: INotification;
}
interface getNewNotisProp {
  (newNotifications: INotification): void;
}

const getNewNotis = (
  cb:getNewNotisProp,
) => {
  socket.on('newWorksNotification', ({
    newNotifications,
  }:newWorksNotificationProp) => {
    cb(newNotifications);
  });
};

export {
  sendMySocketID,
  getNewNotis,
};
