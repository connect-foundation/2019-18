import multerS3 from 'multer-s3';
import uuidv4 from 'uuid/v4';
import { S3 } from '../middleware/aws';

import multer = require('multer');

const multerUpload = multer({
  storage: multerS3({
    s3: S3,
    bucket: process.env.OS_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const [type, format] = file.originalname.split('.');
      const nameUuid = uuidv4();
      const customFileName = `${type}/${nameUuid}.${format}`;
      cb(null, customFileName);
    },
    acl: 'public-read',
  }),
}).array('multi-files', 10);

export { multerUpload };
