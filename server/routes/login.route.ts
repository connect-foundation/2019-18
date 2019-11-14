import { login } from '../controllers/login';

const router = require('express').Router();

router.post('/', login);

export default router;
