import { signup } from '../controller/user';

const router = require('express').Router();

router.post('/signup', signup);
export default router;
