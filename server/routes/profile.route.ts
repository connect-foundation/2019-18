import {
  getMyProfile,
  setMyProfile,
} from '../controllers/profile';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.get('/', authByJWT, getMyProfile);
router.post('/', authByJWT, setMyProfile);
export default router;
