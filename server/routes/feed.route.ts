import {
  getImages, getWallpapers, getWorkImage, addComment, getMoreWallpapers, getMoreImages,
} from '../controllers/feeds';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.get('/images', getImages);
<<<<<<< HEAD
router.get('/images/:id', getWorkImage);
router.post('/images/:id/add-comment', jwt, addComment);
=======
router.get('/images/more/:fixedNum/:skippedNum', getMoreImages);
router.get('/workimage/:id', getWorkImage);
router.post('/images/:id/add-comment', addComment);
>>>>>>> b56116383d9dee7a64ec0f97559dc406558ce10c
router.get('/wallpapers', getWallpapers);
router.get('/wallpapers/more/:fixedNum/:skippedNum', getMoreWallpapers);
export default router;
