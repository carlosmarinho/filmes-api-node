const MovieService = require('../services/movieService')

exports.fetchMovies = (req, res) => {
  const movies = MovieService.findAll(req, res);
  res.status(200).json(movies);
}