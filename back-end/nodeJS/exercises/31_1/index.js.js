const express = require('express');
const bodyParser = require('body-parser');
const {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
  savePlants,
  initPlant,
  createNewPlantIncrement,
  defaultPlants,
} = require('./plants');

const app = express();
app.use(bodyParser.json());

app.get('/plants', (req, res) => {
  return res.status(200).json(getPlants(defaultPlants));
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(getPlantById(id, defaultPlants));
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(removePlantById(id, defaultPlants));
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const { newPlant } = req.body;
  return res.status(200).json(editPlant(id, newPlant, defaultPlants));
});

app.post('/plant', (req, res) => {
  const { newPlant } = req.body;
  return res.status(200).json(createNewPlant(newPlant, defaultPlants, createNewPlantIncrement));
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  return res.status(200).json(getPlantsThatNeedsSunWithId(id, defaultPlants));
});

app.listen(3000, () => console.log('Listening on port 3000'));
