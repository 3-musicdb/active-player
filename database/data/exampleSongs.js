const faker = require('faker');

module.exports = [
  {
    songId: 141,
    length: 571,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3',
    title: 'Wakin on a Pretty Day',
    artist: 'Kurt Vile',
    album: 'Wakin on a Pretty Daze',
    thumbnail: 'https://sound-clout.s3-us-west-1.amazonaws.com/SummerDaze.jpeg',
  },
  {
    songId: 142,
    length: 202,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: `https://sound-clout.s3-us-west-1.amazonaws.com/09+Bugs+Don't+Buzz.mp3`,
    title: `Bugs Don't Buzz`,
    artist: 'Majical Cloudz',
    album: 'Impersonator',
    thumbnail: 'https://sound-clout.s3-us-west-1.amazonaws.com/Impersonator.jpeg',
  },
  {
    songId: 444,
    length: 183,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Fleas.mp3',
    title: 'Fleas',
    artist: 'Dyalla',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 445,
    length: 143,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Midnight_Prophet.mp3',
    title: 'Midnight Prophet',
    artist: 'Sarah, The Illstrumentalist',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 446,
    length: 175,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Princess.mp3',
    title: 'Princess',
    artist: 'Ramzoid',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 333,
    length: 168,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Scratching_Teeth.mp3',
    title: 'Scratching Teeth',
    artist: 'JHS Pedals',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 334,
    length: 163,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/The_Getaway.mp3',
    title: 'The Getaway',
    artist: 'The Whole Other',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 335,
    length: 184,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Grant_Green.mp3',
    title: 'Grant & Green',
    artist: 'Josh Lippi & The Overtimers',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 222,
    length: 199,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Inkling.mp3',
    title: 'Inkling',
    artist: 'Slenderbeats',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 223,
    length: 153,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Glory_Be.mp3',
    title: 'Glory Be',
    artist: 'Patrick Patrikios',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
  {
    songId: 224,
    length: 177,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: 'https://sound-clout.s3-us-west-1.amazonaws.com/Timeless.mp3',
    title: 'Timeless',
    artist: 'Slenderbeats',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
];

/*
{
    songId: ,
    length: ,
    timestamp: 0,
    isliked: Math.floor(Math.random() * 2),
    songFile: '',
    title: '',
    artist: '',
    album: faker.commerce.productName(),
    thumbnail: faker.image.imageUrl(),
  },
*/