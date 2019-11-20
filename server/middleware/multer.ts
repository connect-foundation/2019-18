import multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './image_data/upload');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const multerUpload = multer({ storage });

export = multerUpload;
