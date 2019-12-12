import { addFollowing } from '../controllers/follow';

const router = require('express').Router();

router.post('/add/:id', addFollowing);

export default router;
