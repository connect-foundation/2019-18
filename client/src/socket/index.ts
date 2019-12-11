import socketOpen from 'socket.io-client';
import { loginUser } from '../modules/login';

const socket = socketOpen('http://localhost:3050');

function sendMySocketID(userState:loginUser) {
  socket.emit('userInfo', userState);
}
export {
  sendMySocketID,
};
