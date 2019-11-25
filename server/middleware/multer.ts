import multerS3 from 'multer-s3';
import uuidv4 from 'uuid/v4';
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
    key: (_req, file, cb) => {
      const [type, format] = file.originalname.split('.');
      const nameUuid = uuidv4();
      cb(null, `${type}/${nameUuid}.${format}`);
    },
  }),
}).array('multi-files', 10);

export { multerUpload };
