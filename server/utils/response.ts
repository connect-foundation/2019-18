import { Response } from 'express';
import httpStatus from 'http-status';

export default (res:Response, data = {}, code = httpStatus.OK) => {
  let result = {
    success: true,
    data: {},
  };

  if (code > 399) {
    result.success = false;
    // code = httpStatus.OK;
  }

  if (typeof data === 'object') {
    result = { ...result, data };
  }

  return res.status(code).json(result);
};
