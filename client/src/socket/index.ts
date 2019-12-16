import socketOpen from 'socket.io-client';
import { loginUser } from '../modules/login';
import { socketUrl } from '../utils/constants';

const socket = socketOpen(socketUrl!, {transports: ['websocket'] } );

function sendMySocketID(userState:loginUser) {
  socket.emit('userInfo', userState);
}

interface test{
  creator: any;
  works: any;
}
socket.on('newWorksNotification', ({ creator, works }:test) => {
  console.log(creator, works);
});

export {
  sendMySocketID,
};
