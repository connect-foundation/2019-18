import multerS3 from 'multer-s3';
import { S3 } from '../middleware/aws';

import multer = require('multer');

const bucket = process.env.OS_BUCKET_NAME;

const multerUpload = multer({
  storage: multerS3({
    s3: S3,
    bucket,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
}).array('multi-files', 10);

export { multerUpload };
