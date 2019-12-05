import {
  getMyProfile,
  setMyProfile,
} from '../controllers/profile';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.get('/', jwt, getMyProfile);
router.post('/', jwt, setMyProfile);
export default router;
