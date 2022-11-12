const MovieService = require('../services/movieService')

exports.fetchMovies = (req, res) => {
  MovieService.findAll(req, res);
}