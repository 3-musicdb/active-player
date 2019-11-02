const mysql = require('mysql');
const Promise = require('bluebird');
const password = require('../config.js')

const db = mysql.createConnection({
  user: 'root',
  password: password,
  database: 'soundCloutPlayer',
});

// append all db functions w/ Async
Promise.promisifyAll(db);

module.exports = db;
