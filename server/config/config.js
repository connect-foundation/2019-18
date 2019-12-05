const configs = {
  production: {
    uri: `mongodb://${process.env.MONGO_USER_ROOT}:${process.env.MONGO_PWD_ROOT}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`,
  },
  development: {
    uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME_DEV}`,
  },
  test: {
    uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_ADDR}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME_TEST}`,
  },
};

module.exports = configs;
