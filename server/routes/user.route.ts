import { signup, withdrawal, getNoti } from '../controllers/user';

const { check } = require('express-validator');
const router = require('express').Router();

router.post('/signup', [check('email').isEmail()], signup);
router.delete('/withdrawal', withdrawal);
router.get('/notifications/:id', getNoti);
export default router;
