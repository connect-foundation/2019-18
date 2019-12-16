import socketOpen from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { setNotification } from '../modules/notification';
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
  const dispatch = useDispatch();

  dispatch(setNotification(newNotifications));
});

export {
  sendMySocketID,
};
