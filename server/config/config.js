const configs = {
  production: {
    uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGOD_BNAME}`,
  },
  development: {
    uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME_DEV}`,
  },
  test: {
    uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME_TEST}`,
  },
};

console.log(configs.production.uri);
// console.log(process.env);

module.exports = configs;
