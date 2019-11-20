import { handleCSVFile } from '../controllers/upload';
import multerUpload from '../middleware/multer';

const router = require('express').Router();

router.post('/', multerUpload.single('file'), handleCSVFile);

export default router;
