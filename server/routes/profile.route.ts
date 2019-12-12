import {
  getMyProfile,
  setMyProfile,
  getProfileById,
} from '../controllers/profile';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.get('/', authByJWT, getMyProfile);
router.post('/', authByJWT, setMyProfile);
router.get('/:id', getProfileById);

export default router;
