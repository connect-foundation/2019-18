import openSocket from 'socket.io';
import { setUserSocketId, getUserSocketId } from '../redis';
import { addNewNotification } from '../services/upload';
import { IUserModel } from '../models/user';
import { IWorkImageModel } from '../models/work_image';
import { IWorkMusicModel } from '../models/work_music';
import { IWallpaperModel } from '../models/wallpaper';


declare global {
  namespace NodeJS {
    interface Global {
        socket: openSocket.Socket,
        io: openSocket.Server,
    }
  }
}

const newWorksNotification = (
  creator:IUserModel,
  works: IWorkImageModel | IWorkMusicModel | IWallpaperModel,
  followers: IUserModel[],
  workType: string,
) => {
  const senderId = creator.id;
  const ref = works.id;
  const createdAt = Date.now();
  const isRead = false;
  followers.forEach(async (follower) => {
    const receiverId = follower._id;
    const receiverSocketId = await getUserSocketId(receiverId);
    if (receiverSocketId) {
      global.io.to(receiverSocketId).emit('newWorksNotification', {
        creator, works, workType, createdAt,
      });
    }

    await addNewNotification(receiverId, senderId, ref, workType, createdAt, isRead);
  });
};

const userInfo = (socket) => {
  socket.on('userInfo', (user) => {
    const userId = user.id;
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
