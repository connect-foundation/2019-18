import fs from 'fs';
import path from 'path';

const connect = require('../config/mongo');

require('dotenv').config();

const basename = path.basename(__filename);

connect();
fs.readdirSync(path.join(__dirname))
  .forEach(async (file) => {
    if (file !== basename && file !== 'ids.ts') {
      const data = require(path.join(__dirname, file)).default;
      const base = path.basename(file);
      const model = require(path.join(__dirname, '../models', base)).default;
      await model.deleteMany({});
      await model.create(data, (err) => {
        console.error('error: ', err);
        process.exit(0);
      });
    }
  });
