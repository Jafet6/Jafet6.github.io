const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    const kkk = /jpg|png/
    if (!kkk.test(path.extname(file.originalname).toLowerCase())) {
      return callback(new Error('File does not has a .jpg extension'))
    }
    callback(null, file.originalname);
  },
})

const upload = multer({ storage });

module.exports = [
  upload.single('arquivo'),
  (req, res) => {
    res.send().status(200)
  }
];
