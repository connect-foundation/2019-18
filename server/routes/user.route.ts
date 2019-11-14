import { signup, withdrawal } from '../controllers/user';

const router = require('express').Router();

router.post('/signup', signup);
router.delete('/withdrawal', withdrawal);

export default router;
