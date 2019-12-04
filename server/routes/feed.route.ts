import {
  getImages, getWallpapers, getWorkImage, addComment, getWallpapersMore,
} from '../controllers/feeds';

const router = require('express').Router();

router.get('/images', getImages);
router.get('/images/:id', getWorkImage);
router.post('/images/:id/add-comment', addComment);
router.get('/wallpapers', getWallpapers);
router.get('/wallpapers/more/:fixedNum/:skippedNum', getWallpapersMore);
export default router;
