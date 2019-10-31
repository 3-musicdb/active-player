const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors')
const cb = require('./routeCallbacks');

const app = express();
const port = 3020;

// why not:
// app.use(bodyParser.json());
const jsonParser = bodyParser.json();

// var corsOptions = {
//     origin: true,
//     methods:['GET', 'POST'],
//     // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// get song
app.get('/songs/:id', cb.getSong);

// get playlist
app.get('/:playlist', cb.getPlaylist);

// post like to song
app.post('/like/:songId', jsonParser, cb.likeEntry);

// add song to playlist once liked
app.post('/playlist/:playlist', jsonParser, cb.playlistEntry);

// add delete route to unlike a song

app.listen(port);
