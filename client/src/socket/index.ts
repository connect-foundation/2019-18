import socketOpen from 'socket.io-client';
import { loginUser } from '../modules/login';
import { socketUrl } from '../utils/constants';

const socket = socketOpen(socketUrl!, { transports: ['websocket'] });

function sendMySocketID(userState:loginUser) {
  socket.emit('userInfo', userState);
}

interface newWorksNotificationProp{
  newNotifications: any;
}
socket.on('newWorksNotification', ({
  newNotifications,
}:newWorksNotificationProp) => {
  console.log(newNotifications);
});

export {
  sendMySocketID,
};
