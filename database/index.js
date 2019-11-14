// const mysql = require('mysql');
// const password = require('../config.js')
const { Client } = require('pg');
// const connectionString = 'postgresql://localhost:5432/soundcloutplayer';

const client = new Client({
  user: 'ParteekSSandhu',
  host: 'localhost',
  database: 'soundcloutplayer',
  password: null,
  port: 5432
});

client.connect((err) => {
  if (err) {
    return console.log('Could not connect to db! ', err);
  } else {
    console.log('CONNECTED TO DB!');
  }
});

// const options = {
//   promiseLib: Promise
// };

// const pgp = require('pg-promise')(options);
// const db = pgp('postgres://localhost:5432/soundcloutplayer');

// const postSong = (req, res, next) => {
//   // post song to database
// };

// const getSong = (req, res, next) => {
//   client.query('select * from songs limit 1')
//   .then((data) => {
//     res.status(200)
//     .json({
//       status: 'success',
//       data: data,
//       message: 'Retrieved song'
//     });
//   })
//   .catch((err) => {
//     return next(err);
//   });
// };

// const postTstamp = (req, res, next) => {
//   // post timestamp to database
// };

// const postLike = (req, res, next) => {
//   // post like to database
// };

// const deleteSong = (req, res, next) => {
//   // delete song from database
// };

// module.exports = {
//   postSong: postSong,
//   getSong: getSong,
//   postTstamp: postTstamp,
//   postLike: postLike,
//   deleteSong: deleteSong
// }


// const db = mysql.createConnection({
//   user: 'root',
//   password: password,
//   database: 'soundCloutPlayer',
// });

// // append all db functions w/ Async
// Promise.promisifyAll(db);

// module.exports = db;

module.exports = client;
