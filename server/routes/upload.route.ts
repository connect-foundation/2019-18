import { getUrl, uploadWorkImage } from '../controllers/upload';
import { multerUpload } from '../middleware/multer';
import authByJWT from '../middleware/authByJWT';

const router = require('express').Router();

router.post('/getImageUrl', authByJWT, multerUpload, getUrl);
router.post('/works-image', authByJWT, uploadWorkImage);
export default router;
