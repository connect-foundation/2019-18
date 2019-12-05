import {
  getImages, getWallpapers, getWorkImage, addComment, getMoreWallpapers, getMoreImages,
} from '../controllers/feeds';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.get('/images', getImages);
router.post('/images/:id/add-comment', authByJWT, addComment);
router.get('/images/more/:fixedNum/:skippedNum', getMoreImages);
router.get('/workimage/:id', getWorkImage);
router.get('/wallpapers', getWallpapers);
router.get('/wallpapers/more/:fixedNum/:skippedNum', getMoreWallpapers);
export default router;
