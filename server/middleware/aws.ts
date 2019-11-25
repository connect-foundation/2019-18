// const AWS = require('aws-sdk');
import AWS from 'aws-sdk';
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';

const endpoint = process.env.OS_ENDPOINT;
const region = 'kr-standard';
const accessKey = process.env.OS_ACCESS_KEY;
const secretKey = process.env.OS_SECRET_KEY;

AWS.config.update({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const config:ServiceConfigurationOptions = {
  endpoint,
  region,
};

const S3 = new AWS.S3(config);

export { S3 };
