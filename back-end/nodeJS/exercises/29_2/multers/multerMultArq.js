const multer = require('multer');


const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = [
  upload.array('arquivos', 5),
  (req, res) => {
    console.log(req.buffer);
    res.status(200).json({ ok: true })
  }
];
