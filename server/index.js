require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const cb = require('./routeCallbacks');
const client = require('../database/index.js');


const app = express();
const port = 3020;

// why not:
app.use(bodyParser.json());
// const jsonParser = bodyParser.json();
app.use(bodyParser.json());

// var corsOptions = {
//     origin: true,
//     methods:['GET', 'POST'],
//     // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors());

app.use('/:id', express.static(path.join(__dirname, '../public')));

// CREATE

// post new song to db
app.post('/songs/:id', (req, res) => {
  const songid = req.params.id;
  const stmt = `INSERT INTO songs VALUES (
    ${songid}
    ${title},
    ${length},
    ${likes},
    ${id_genre},
    ${id_album},
    ${id_artist}
    );`

  client.query(stmt, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data);
    }
  })
})

// READ

// get specific song
app.get('/songs/:id', (req, res) => {
    // get song informaton and send back to client
    const songVal = req.params.id;
    
    const stmt = `SELECT * FROM songs WHERE id = ${songVal};`

    client.query(stmt, (err, data) => {
      if (err) {
        console.log(err.stack);
      } else {
        res.status(200).send(data);
      }
    })
});

// get entire album in place of playlist
app.get('/albums/:id', (req, res) => {
  // get album and send back to client as playlist
  const albumId = req.params.id;
  const stmt = `SELECT * FROM songs WHERE id_album = ${albumId};`

  client.query(stmt, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data);
    }
  });
});

// UPDATE

// BUILD OUT UPDATE FUNCTIONALITY FOR LATER

// update likes of song
// app.update('/update/songs/:id', (req, res) => {
//   const id = req.params.id;
// })

// DELETE

// delete selected song from db
app.delete('/songs/:id', (req, res) => {
  const id = req.params.id;
  const stmt = `DELETE FROM songs WHERE id = ${id};`

  client.query(stmt, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

/*

QUESTIONS

how are routes supposed to be REST compliant if they are the same?

do I need a audio file to go along w/ the data?

*/