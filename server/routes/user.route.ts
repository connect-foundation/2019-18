import {
  signup, withdrawal, getNoti, updateImg,
} from '../controllers/user';
import { multerUpload } from '../middleware/multer';
import authByJWT from '../middleware/authByJWT';

const { check } = require('express-validator');
const router = require('express').Router();

router.post('/signup', [check('email').isEmail()], signup);
router.delete('/withdrawal', withdrawal);
router.get('/notifications/:id', getNoti);
router.post('/update_profile_img', authByJWT, multerUpload, updateImg);
export default router;
