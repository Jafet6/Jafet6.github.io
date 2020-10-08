const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const fs = require('fs');
const multerIMG = require('./multers/multerIMG');
const multerMultArq = require('./multers/multerMultArq');

const app = express();

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json())

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

app.get('/ping', (req, res) => res.send('pong!'));

app.post('/files/upload', multerIMG);

app.post('/files/many', multerMultArq);

app.post('/fileToText', (req, res) => {

  const { text } = req.body
  fs.writeFile(`${text}.txt`, text, (err) => {
    if (err) throw err;
    console.log('saved')
  })
  res.status(201).json({ ok: true })
})

app.post('/readFile', (req, res) => {
  const { fileName } = req.body;
  fs.readFile(`${fileName}.txt`, (err, data) => {
    if (err) throw err;
    return res.status(200).json({ data });
  })
})


module.exports = app;
