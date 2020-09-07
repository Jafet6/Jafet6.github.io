require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.get('/', controllers.cepController.cepFunc);

app.listen(3000, () => console.log('Listening on 3000'));
