import { getImages, getWallpapers, test } from '../controllers/feeds';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/wallpapers', getWallpapers);
router.get('/feeds', test);
export default router;
