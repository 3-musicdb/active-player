const fs = require('fs');
const faker = require('faker');

const writeSongs = fs.createWriteStream('songs.csv');
writeSongs.write('id,title,album,artist,likes,length\n', 'utf8');

const writeData = (writer, encoding, callback) => {
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

writeData(writeSongs, 'utf-8', () => {
  writeSongs.end();
});