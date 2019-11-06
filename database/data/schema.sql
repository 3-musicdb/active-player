DROP DATABASE IF EXISTS soundcloutplayer;

CREATE DATABASE soundcloutplayer;

\c soundcloutplayer

CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  songId INT NOT NULL,
  title TEXT NOT NULL,
  album TEXT NOT NULL,
  artist TEXT NOT NULL,
  length INT NOT NULL,
  timestamp INT DEFAULT 0
  likes INT DEFAULT 0,
  genre_id INT REFERENCES genre(id),
  artist_id INT REFERENCES artists(id),
  album_id INT REFERENCES albums(id),
);



