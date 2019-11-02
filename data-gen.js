const fs = require('fs');
const faker = require('faker');

const writeSongs = fs.createWriteStream('songs.csv');
writeSongs.write('id,title,')