const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

// a stream serve para enviar parte por parte do arquivo sem que sobrecarregue a memória RAM do pc
const stream = fs.createReadStream('./meu-arquivo.jpg');
const stream1 = fs.createReadStream('./meu-arquivo1.jpg');

const form = new FormData();
form.append('arquivo', stream);
form.append('arquivo', stream1);


const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/many', form, {
    headers: { ...formHeaders }
  })
  .then((response) => {
    console.log(response.status);
  })
  .catch((err) => {
    console.log(err);
  })