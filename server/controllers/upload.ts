import { Request, Response, NextFunction } from 'express';
import { S3, bucketName } from '../middleware/aws';
// import { loginService } from '../services/login';
import fs = require('fs');

export interface MulterFile {
    key: string // Available using `S3`.
    path: string // Available using `DiskStorage`.
    mimetype: string
    originalname: string
    size: number
  }

const handleCSVFile = async (req: Request & { file: MulterFile[] },
  res: Response, next: NextFunction) => {
  const { file } = req;

  if (!file) {
    const error = new Error('Please upload a file');
    return next(error);
  }

  let objectName = 'sample-folder/';
  const localFilePath = './image_data/upload/1574263824945-Kn1p17WFARhPjAEaZ3RMXq5X5KY.png';
  const result = await S3.putObject({
    Bucket: bucketName,
    Key: objectName,
    ACL: 'public-read',
  }).promise();
  objectName += 'sample-object';
  // upload file
  const uploadresult = await S3.putObject({
    Bucket: bucketName,
    Key: objectName,
    ACL: 'public-read',
    // ACL을 지우면 전체공개가 되지 않습니다.
    Body: fs.createReadStream(localFilePath),
  }).promise();
  console.log(uploadresult);

  const local_file_path = './tmp/test.png';
  const outStream = fs.createWriteStream(local_file_path);
  const inStream = S3.getObject({
    Bucket: bucketName,
    Key: objectName,
  }).createReadStream();

  inStream.pipe(outStream);
  inStream.on('end', () => {
    console.log('Download Done');
  });

  res.send(file);
};

export { handleCSVFile };
