import { login, authUser, whoAmI } from '../controllers/login';

const router = require('express').Router();

router.post('/', login);
router.get('/authUser', authUser);
router.get('/whoAmI', whoAmI);

export default router;
