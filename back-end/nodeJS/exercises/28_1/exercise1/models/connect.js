const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://localhost://127.0.0.1.27017';

module.exports = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('cep_lookup'))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
