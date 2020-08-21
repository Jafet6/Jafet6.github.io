const fs = require('fs').promises;
const path = require('path');
const express = require('express');

const router = express.Router();

const readSimpsonsFile = async () => {
  const content = await fs.readFile(path.resolve(__dirname, 'simpsons.json'));
  return JSON.parse(content.toString('utf-8'));
};

const writeSimpsonsFile = async (content) => {
  fs.writeFile(path.resolve(__dirname, 'simpsons.json'), JSON.stringify(content), (err) => {
    if (err) throw err
  })
}

router.get('/', async (req, res) => {
  const result = await readSimpsonsFile();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const simpsArr = await readSimpsonsFile()
  const id = req.params.id;
  const result = simpsArr.find((simps) => simps.id === id);
  res.status(200).send(result);
});

router.post('/', async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) return res.status(400);
  const oldSimpsonsArr = await readSimpsonsFile();
  const newSimpsonsArr = [...oldSimpsonsArr, { id, name }];
  await writeSimpsonsFile(newSimpsonsArr);
  return res.status(200).json({ message: 'character created!' })
});

module.exports = router;
