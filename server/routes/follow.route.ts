import {
  addFollowing, deleteFollowing,
} from '../controllers/follow';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.post('/add/:id', authByJWT, addFollowing);
router.post('/delete/:id', authByJWT, deleteFollowing);

export default router;
