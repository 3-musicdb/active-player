DROP DATABASE IF EXISTS soundcloutplayer;

CREATE DATABASE soundcloutplayer;

\c soundcloutplayer

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  songId INT NOT NULL,
  title TEXT NOT NULL,
  album TEXT NOT NULL,
  artist TEXT NOT NULL,
  likes INT DEFAULT 0,
  length INT NOT NULL,
  timestamp INT DEFAULT 0
);

