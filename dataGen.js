const fs = require('fs');
const zlib = require('zlib');
const faker = require('faker');
// const gzip = zlib.createGzip();
// const inp = fs.createReadStream('songs.csv');
// const out = fs.createWriteStream('songs.csv.gz');
// const compressSongs = gzip(data).pipe(writeSongs);

const writeSongs = fs.createWriteStream('songs.csv');
writeSongs.write('songid,title,songlength,likes,id_genre,id_album,id_artist\n', 'utf8');

const writeGenres = fs.createWriteStream('genres.csv');
writeGenres.write('genreId,name\n', 'utf8');

const writeArtists = fs.createWriteStream('artists.csv');
writeArtists.write('artistId,firstName,lastName\n', 'utf8');

const writeAlbums = fs.createWriteStream('albums.csv');
writeAlbums.write('albumId,name\n', 'utf8');

const generateSongs = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const title = faker.lorem.word();
      const songLength = faker.random.number({min: 180, max: 300});
      const likes = faker.random.number();
      const id_genre = faker.random.number({min: 1, max: 10000000});
      const id_album = faker.random.number({min: 1, max: 1000000});
      const id_artist = faker.random.number({min: 1, max: 100000});
      const data = `${id},${title},${songLength},${likes},${id_genre},${id_album},${id_artist}\n`;
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    while ( i > 0 && ok );
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  }
  write();
}


const generateGenres = (writer, encoding, callback) => {
  let genreArray = [
    'industrial',
    'heavy metal',
    'rock-n-roll',
    'punk',
    'alternative',
    'pop',
    'country',
    'blues',
    'gospel',
    'jazz',
    'jamaican',
    'rap',
    'breakbeat',
    'drum-n-bass',
    'hardcore',
    'techno',
    'house',
    'trance',
    'downtempo'
  ]
  let i = 10000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const element = Math.floor(Math.random() * 19);
      const genreElement = genreArray[element];
      const data = `${id},${genreElement}\n`;
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    while ( i > 0 && ok );
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  }
  write();
}

const generateArtists = (writer, encoding, callback) => {
  let i = 100000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const data = `${id},${firstName},${lastName}\n`;
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    while ( i > 0 && ok );
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  }
  write();
}

const generateAlbums = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const album = faker.lorem.word();
      const data = `${id},${album}\n`;
      if ( i === 0 ) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
    while ( i > 0 && ok );
    if ( i > 0 ) {
      writer.once('drain', write);
    }
  }
  write();
}

generateSongs(writeSongs, 'utf-8', () => {
  writeSongs.end();
});

generateGenres(writeGenres, 'utf-8', () => {
  writeGenres.end();
});

generateArtists(writeArtists, 'utf-8', () => {
  writeArtists.end();
});

generateAlbums(writeAlbums, 'utf-8', () => {
  writeAlbums.end();
});

// compress file after it has been created
// inp.pipe(gzip).pipe(out)

// psql <database> < file.sql

// /Users/ParteekSSandhu/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module

// ~/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module

// \COPY albums(albumId,name) FROM '~/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module/albums.csv' DELIMITER ',' CSV HEADER;

// \COPY artists(artistId,firstName,lastName) FROM '~/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module/artists.csv' DELIMITER ',' CSV HEADER;

// \COPY genre(genreId,name) FROM '~/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module/genres.csv' DELIMITER ',' CSV HEADER;

// \COPY songs(songid,title,songlength,likes,id_genre,id_album,id_artist) FROM '~/Desktop/HR/hrsf123/MusicDB/soundclout-active-player-module/genres.csv' DELIMITER ',' CSV HEADER;