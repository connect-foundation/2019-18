import {
  OS_ACCESS_KEY,
  OS_SECRET_KEY,
  OS_ENDPOINT,
  OS_BUCKET_NAME,
  WALLPAPERS,
} from './constant';

const AWS = require('aws-sdk');
const fs = require('fs');

const endpoint = new AWS.Endpoint(OS_ENDPOINT);
const region = 'kr-standard';
const accessKey = OS_ACCESS_KEY;
const secretKey = OS_SECRET_KEY;


AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const S3 = new AWS.S3({
  endpoint,
  region,
});

const bucketName = OS_BUCKET_NAME;
const objectName = 'wallpapers';
const localFilePath = '/test.jpg';

const download = async (fileName: string) => new Promise((resolve, reject) => {
  S3.getObject({
    Bucket: bucketName,
    Key: `${objectName}/${fileName}`,
  }, (err, data) => {
    if (err) {
      console.error(err);
      reject(err);
    }
    if (data) {
      const objectData = data.Body.toString('base64');
      resolve(objectData);
    } else {
      resolve(null);
    }
  });
});

export default download;
