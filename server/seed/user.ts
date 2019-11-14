const bcrypt = require('bcrypt');

const saltRounds = bcrypt.genSaltSync(10);
const hashedPwd = bcrypt.hashSync('1234', saltRounds);

const users = [
  {
    origin_url: '1234',
    thumbnail_url: '1234',
    pwd: hashedPwd,
    email: 'test@gmail.com',
    name: 'test1',
  },
];

export default users;
