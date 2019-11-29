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
      /**
       * 클라이언트에서 파일명의 uuid를 만들었었는데, 서버에서 만드는것으로 변경했습니다.
       * 변경 사유: uuid 는 서버와 db사이의 소통을 위해 필요한 유니크한 아이디이기때문.
       * customFileName 에 ${type} 이 들어가는 이유: object storage의 파일 구조가
       *    /images/12341234.png
       *    /wallpapers/1235534.png
       * 생겼기때문.
       */
      const [type, format] = file.originalname.split('.');
      const nameUuid = uuidv4();
      const customFileName = `${type}/${nameUuid}.${format}`;
      cb(null, customFileName);
    },
  }),
}).array('multi-files', 10);

export { multerUpload };