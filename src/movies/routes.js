const express = require('express');

const router = express.Router();

const movies = [
  {
    title: '100 Dalmatas',
    imageUrl: 'bla'
  }
];

router
  .get('/', (req, res) => {
    res.send(movies)
  })
  .post((req, res) => {
    if (!req.body.title || !req.body.imageUrl) {
      res.status(400).send({ error: 'Both `title` and `imageUrl` parameters should be present' });
    }
    if(!req.body.title.match(/[a-zA-Z0-9]/)) {
      res.status(400).send({ error: 'Title can only contain letters or numbers' });
    }
  
    const newMovie = { title: req.body.title, imageUrl: req.body.imageUrl };
    movies.push(newMovie)
    res.send(newMovie);
  });

module.exports = { movieRouter: router }

