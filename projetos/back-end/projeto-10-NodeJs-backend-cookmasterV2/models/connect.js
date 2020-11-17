const mongoClient = require('mongodb').MongoClient;

// const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';
// const DB_NAME = 'Cookmaster';

module.exports = () =>
  mongoClient
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
