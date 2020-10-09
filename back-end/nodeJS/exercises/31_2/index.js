const factory = require('./app');

const app = factory();

app.listen(3000, () => console.log('Listening on port 3000'));
