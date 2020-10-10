const bodyParser = require('body-parser');
const { Patients, Plans, Surgeries } = require('./models');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patients', async (req, res) => {
  const patients = await Patients.findAll({ include: [{ model: Plans, as: 'plan' }] });
  return res.status(200).json(patients);
});

app.get('/patients/surgeries', async (req, res) => {
  const patients = await Patients.findAll({ include: [{ model: Surgeries, as: 'surgeries'}] });
  return res.status(200).json(patients);
});

app.get('/patients/plan/:id', async (req, res) => {
  const { id } = req.params;
  const patients = await Patients.findAll({ where: { plan_id: id } });
  return res.status(200).json(patients)
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});