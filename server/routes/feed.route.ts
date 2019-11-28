import {
  getImages, getWallpapers, getWorkImage, addComment,
} from '../controllers/feeds';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/images/:id', getWorkImage);
router.post('/images/:id/add-comment', addComment);
router.get('/wallpapers', getWallpapers);
export default router;
