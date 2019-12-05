import { getUrl, uploadWorkImage } from '../controllers/upload';
import { multerUpload } from '../middleware/multer';
import jwt from '../middleware/jwt';

const router = require('express').Router();

router.post('/getImageUrl', jwt, multerUpload, getUrl);
router.post('/works-image', jwt, uploadWorkImage);
export default router;
