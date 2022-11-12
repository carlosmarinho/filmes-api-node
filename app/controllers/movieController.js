const MovieService = require('../services/movieService')

exports.createMovie = async (req, res, next) => {
  try {
    const movie = await MovieService.createMovie(req, res, next);
    res.status(201).json(movie);
  }
  catch (err) {
    next(err)
  }
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
