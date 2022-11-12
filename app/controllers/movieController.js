const MovieService = require('../services/movieService')

exports.createMovie = async (req, res, next) => {
  try {
    const movie = await MovieService.createMovie(req.body);
    res.status(201).json(movie);
  }
  catch (err) {
    next(err)
  }
}

exports.fetchMovies = async (req, res, next) => {
  try {
    const movies = await MovieService.findAll();
    res.status(200).json(movies);
  }
  catch (err) {
    next(err)
  }
}
