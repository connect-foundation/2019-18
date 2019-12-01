import {
  getImages, getWallpapers, getWorkImage, addComment,
} from '../controllers/feeds';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/images/:id', getWorkImage);
router.post('/images/:id/add-comment', jwt, addComment);
router.get('/wallpapers', getWallpapers);
export default router;
