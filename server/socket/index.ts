import openSocket from 'socket.io';
import { setUserSocketId } from '../redis';

declare global {
  namespace NodeJS {
    interface Global {
        socket: openSocket.Socket,
        io: openSocket.Server,
    }
  }
}


const newWorksNotification = (creator, works, followers) => {
  global.io.emit('newWorksNotification', { creator: 'creator', works: 'works' });
  followers.forEach((follower) => {
  });
};

const userInfo = (socket) => {
  socket.on('userInfo', (userInfo) => {
    const userId = userInfo.id;
    const socketId = socket.id;
    setUserSocketId(userId, socketId);
  });
};


const connection = (io:openSocket.Server) => {
  io.on('connection', (socket:openSocket.Socket) => {
    global.socket = socket;
    userInfo(socket);
  });
};

const connect = (server: any) => {
  const io:openSocket.Server = openSocket(server);
  global.io = io;
  connection(io);
};

export {
  connect,
  newWorksNotification,
};
