import { login, whoAmI } from '../controllers/login';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.post('/', login);
router.get('/whoAmI', authByJWT, whoAmI);


export default router;
