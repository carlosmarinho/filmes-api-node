const MovieService = require('../services/movieService')

exports.fetchMovies = async (req, res, next) => {
  try {
    const movies = await MovieService.findAll(req, res, next);
    res.status(200).json(movies);
  }
  catch (err) {
    next(err)
  }
}