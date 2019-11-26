import { getImages, getWallpapers, getWorkImage } from '../controllers/feeds';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/images/:id', getWorkImage);
router.get('/wallpapers', getWallpapers);
export default router;
