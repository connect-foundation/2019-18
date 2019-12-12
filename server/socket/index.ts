import openSocket from 'socket.io';
import { setUserSocketId } from '../redis';

const connect = (server: any) => {
  const io = openSocket(server);
  io.on('connection', (socket) => {
    socket.on('userInfo', (userInfo) => {
      const userId = userInfo.id;
      const socketId = socket.id;
      setUserSocketId(userId, socketId);
    });
  });
};

export default connect;
