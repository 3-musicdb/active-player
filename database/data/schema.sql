DROP DATABASE IF EXISTS soundcloutplayer;

DROP TABLE IF EXISTS genre, albums, artists, songs;

CREATE DATABASE soundcloutplayer;

\c soundcloutplayer

CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  genreId INT NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  albumId INT NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  artistId INT NOT NULL,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  songId INT NOT NULL,
  title TEXT NOT NULL,
  songlength INT NOT NULL,
  likes INT NOT NULL,
  id_genre INT NOT NULL,
  id_album INT NOT NULL,
  id_artist INT NOT NULL,
  tstamp INT DEFAULT 0
);



