import { getImages, getWallpapers } from '../controllers/feeds';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/wallpapers', getWallpapers);

export default router;
