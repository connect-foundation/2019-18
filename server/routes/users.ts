import { Request, Response, NextFunction } from 'express';

const router = require('express').Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
});

export default router;
