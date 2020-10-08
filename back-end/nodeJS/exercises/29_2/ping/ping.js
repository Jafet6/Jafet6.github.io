const axios = require('axios');

// so testamos a api com um get, mesma coisa que o postman faz

axios.get('http://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status)
  })
  .catch((err) => {
    console.log(err)
  });
