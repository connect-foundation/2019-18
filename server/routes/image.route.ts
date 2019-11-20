
import { getImages } from '../controllers/image';

const router = require('express').Router();

router.get('/', getImages);

export default router;
