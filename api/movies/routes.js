const express = require('express');
const { Movie } = require('../db/models'); 

const router = express.Router();

router
  .get('/', async (_, res) => {
    const allMovies = await Movie.findAll();
    res.send(allMovies.map(({ id, title, imageUrl }) => ({ id, title, poster_path: imageUrl })));
  })
  .post('/', async (req, res) => {
    if (!req.body.title || !req.body.imageUrl) {
      res.status(400).send({ error: 'Both `title` and `imageUrl` parameters should be present' });
      return;
    }

    if(!req.body.title.match(/[a-zA-Z0-9]/)) {
      res.status(400).send({ error: 'Title can only contain letters or numbers' });
      return;
    }
  
    const newMovie = await Movie.create({ title: req.body.title, imageUrl: req.body.imageUrl });
    res.status(201).send(newMovie);
  });

module.exports = { movieRouter: router }

