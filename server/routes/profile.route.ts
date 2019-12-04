import {
  getMyProfile,
} from '../controllers/profile';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.get('/', jwt, getMyProfile);
export default router;
