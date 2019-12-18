import { login, whoAmI, logout } from '../controllers/login';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.post('/', login);
router.get('/whoAmI', authByJWT, whoAmI);
router.get('/out', logout);

export default router;
