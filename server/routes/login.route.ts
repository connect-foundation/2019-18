import { login, whoAmI } from '../controllers/login';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.post('/', login);
router.get('/whoAmI', jwt, whoAmI);


export default router;
