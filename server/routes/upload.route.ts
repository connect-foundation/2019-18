import { getUrl, uploadWorkImage } from '../controllers/upload';
import { multerUpload } from '../middleware/multer';

const router = require('express').Router();

router.post('/getImageUrl', multerUpload, getUrl);
router.post('/works-image', uploadWorkImage);
export default router;
