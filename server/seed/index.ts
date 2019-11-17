import fs from 'fs';
import path from 'path';

require('dotenv').config();
const connect = require('../config/mongo');

const basename = path.basename(__filename);

connect();
fs.readdirSync(path.join(__dirname))
  .forEach((file) => {
    if (file !== basename) {
      const data = require(path.join(__dirname, file)).default;
      const base = path.basename(file);
      const model = require(path.join(__dirname, '../models', base)).default;
      model.create(data, (err) => {
        console.error('error: ', err);
        process.exit(0);
      });
    }
  });
