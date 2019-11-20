const AWS = require('aws-sdk');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const accessKey = process.env.OS_ACCESS_KEY;
const secretKey = process.env.OS_SECRET_KEY;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const S3 = new AWS.S3({
  endpoint,
  region,
});

const bucketName = process.env.OS_BUCKET_NAME;

export { S3, bucketName };
