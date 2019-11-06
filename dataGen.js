const fs = require('fs');
const zlib = require('zlib');
const faker = require('faker');
// const gzip = zlib.createGzip();
// const inp = fs.createReadStream('songs.csv');
// const out = fs.createWriteStream('songs.csv.gz');
// const compressSongs = gzip(data).pipe(writeSongs);

// const writeSongs = fs.createWriteStream('songs.csv');
// writeSongs.write('songId,title,album,artist,likes,length\n', 'utf8');

const writeGenres = fs.createWriteStream('genres.csv');
writeGenres.write('genreId,name\n', 'utf8');

// const writeArtists = fs.createWriteStream('artists.csv');
// writeArtists.write('artistId,name\n', 'utf8');

// const writeAlbums = fs.createWriteStream('albums.csv');
// writeAlbums.write('albumId,name\n', 'utf8');

const generateSongs = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const title = faker.lorem.word();
      const album = faker.lorem.word();
      const artist = faker.name.lastName();
      const likes = faker.random.number();
      const length = faker.random.number();
      const data = `${id},${title},${album},${artist},${likes},${length}\n`;
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
  let i = 100;
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
  let i = 100;
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
  let i = 100;
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

// generateSongs(writeSongs, 'utf-8', () => {
//   writeSongs.end();
// });

generateGenres(writeGenres, 'utf-8', () => {
  writeGenres.end();
});

// generateArtists(writeArtists, 'utf-8', () => {
//   writeArtists.end();
// });

// generateAlbums(writeAlbums, 'utf-8', () => {
//   writeAlbums.end();
// });

// compress file after it has been created
// inp.pipe(gzip).pipe(out)

// psql <database> < file.sql