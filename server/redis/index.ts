import * as redis from 'redis';
import bluebird from 'bluebird';

declare module 'redis' {

  export interface RedisClient extends NodeJS.EventEmitter {
      hsetAsync(key:string, field: string, value:string): Promise<void>;
      hgetAsync(key:string, field: string): Promise<string>;
  }
}
const port = process.env.REDIS_PORT as any;

const redisConfig:redis.ClientOpts = {
  host: process.env.REDIS_SERVER_ADDR as string,
  port: port as number,
  password: process.env.REDIS_PASSWORD as string,
};

const redisClient = redis.createClient(redisConfig);
bluebird.promisifyAll(redisClient);
redisClient.on('connect', () => {
});

const setUserSocketId = async (userId, socketId) => redisClient.hsetAsync('users:socketId', userId, socketId);

const deleteUserSocketId = (userId) => {
  redisClient.del(userId);
};

const getUserSocketId = async (userId) => redisClient.hgetAsync('users:socketId', userId.toString());

export {
  setUserSocketId,
  deleteUserSocketId,
  getUserSocketId,
};
