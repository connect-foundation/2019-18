import {
  addFollowing, deleteFollowing, getAllFollow, getFollowers, getFollowing,
} from '../controllers/follow';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.post('/add/:id', authByJWT, addFollowing);
router.post('/delete/:id', authByJWT, deleteFollowing);
router.get('/', getAllFollow);
router.get('/get-followers/:id', getFollowers);
router.get('/get-following/:id', getFollowing);

export default router;
