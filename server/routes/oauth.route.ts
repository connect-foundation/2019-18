import { oauthCallback } from '../controllers/oauth';

const router = require('express').Router();

router.get('/callback', oauthCallback);

export default router;
