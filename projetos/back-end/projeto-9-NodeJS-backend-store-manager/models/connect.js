const mongoClient = require('mongodb').MongoClient;

const URL = 'mongodb+srv://Jafet:LEGF1995!@teste-jafet.kiwoy.mongodb.net/NomeQualquer?retryWrites=true&w=majority'

module.exports = () =>
  mongoClient
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('storeManager'))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
