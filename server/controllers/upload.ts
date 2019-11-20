import { Request, Response, NextFunction } from 'express';
// import { loginService } from '../services/login';
import { S3, bucketName } from '../middleware/aws';

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

  // const bucketName = 'jmj-temp-image';
  // const objectName = 'sample-object';
  // const result = await S3.putObject({
  //   Bucket: bucketName,
  //   Key: objectName,
  //   ACL: 'public-read',
  // }).promise();

  // // upload file
  // const uploadresult = await S3.putObject({
  //   Bucket: bucket_name,
  //   Key: object_name,
  //   ACL: 'public-read',
  //   // ACL을 지우면 전체공개가 되지 않습니다.
  //   Body: fs.createReadStream(local_file_path),
  // }).promise();
  res.send(file);
};

export { handleCSVFile };
