const express = require('express');
const {DATABASE} = require('./config');

const app = express();

app.get('/api/library', (req, res) => {
  res.status(200).json(DATABASE);
});

let server;
let knex;

// const runServer = (database = DATABASE, port = PORT) => {
//   return new Promise((resolve, reject) => {
//     try {
//       knex = require('knex')(database);
//       server = app.listen(port, () => {
//         resolve();
//       });
//     }
//     catch (err) {
//       reject(err);
//     }
//   });
// }
//
// const closeServer = () => {
//   return knex.destroy().then(() => {
//     return new Promise((resolve, reject) => {
//       server.close(err => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   });
// }
//
// if (require.main === module) {
//   runServer().catch(err => {
//     console.error(`Can't start server: ${err}`);
//     throw err;
//   });
// }
module.exports = {app};