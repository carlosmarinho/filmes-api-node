const MovieService = require('../services/movieService')

exports.createMovie = async (req, res, next) => {
  const movie = await MovieService.createMovie(req.body);
  res.status(201).json(movie);
}

exports.fetchMovies = async (req, res, next) => {
  try {
    const movies = await MovieService.findAll(req, res, next);
    res.status(200).json(movies);
  }
  catch (err) {
    next(err)
  }
}
