// const config = {
//   db: {
//     host: 3306,
//     user: root,
//     password: password,
//     database: restapitest123,
//   },
//   listParPage: 10,
// };

// module.exports = config;

const { createPool } = require("mysql2");

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = pool;
