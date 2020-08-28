const mysqlx = require('@mysql/xdevapi');

let schema;

module.exports = () => {
  if (schema) return Promise.resolve(schema);
  return mysqlx
    .getSession({
      host: process.env.HOSTNAME,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT,
    })
    .then(async (session) => {
      schema = await session.getSchema('cep_lookup');
      return schema;
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
