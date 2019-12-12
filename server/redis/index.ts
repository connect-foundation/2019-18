import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const port = process.env.REDIS_PORT as any;

const redisConfig:redis.ClientOpts = {
  host: process.env.REDIS_SERVER_ADDR as string,
  port: port as number,
  password: process.env.REDIS_PASSWORD as string,
};

const redisClient = redis.createClient(redisConfig);

const setUserSocketId = (userId, socketId) => {
  redisClient.set(userId, socketId);
};

export {
  setUserSocketId,
};
