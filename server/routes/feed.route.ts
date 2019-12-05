import {
  getImages, getWallpapers, getWorkImage, addComment, getMoreWallpapers, getMoreImages,
} from '../controllers/feeds';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.get('/images', getImages);
router.post('/images/:id/add-comment', jwt, addComment);
router.get('/images/more/:fixedNum/:skippedNum', getMoreImages);
router.get('/workimage/:id', getWorkImage);
router.get('/wallpapers', getWallpapers);
router.get('/wallpapers/more/:fixedNum/:skippedNum', getMoreWallpapers);
export default router;
