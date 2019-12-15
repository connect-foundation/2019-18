import socketOpen from 'socket.io-client';
import { loginUser } from '../modules/login';
import { socketUrl } from '../utils/constants';

const socket = socketOpen(socketUrl!, { transports: ['websocket'] });

function sendMySocketID(userState:loginUser) {
  socket.emit('userInfo', userState);
}

interface test{
  creator: any;
  works: any;
  workType: any;
  createdAt: string;
}
socket.on('newWorksNotification', ({
  creator, works, workType, createdAt,
}:test) => {
  console.log(creator);
  console.log(works);
  console.log(workType);
  console.log(createdAt);
});

export {
  sendMySocketID,
};
