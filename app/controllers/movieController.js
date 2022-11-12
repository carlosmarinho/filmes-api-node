const MovieService = require('../services/movieService')

exports.loadFilms = async (req, res, next) => {
  try {
    await MovieService.loadFilms();
  }
  catch (err) {
    next(err)
  }
}

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

  console.log("req: ", req.params)
  const all = req.query.all || false;
  const limit = parseInt(req.query.limit) || 1;
  const offset = parseInt(req.query.offset) || 10

  try {
    const movies = await MovieService.findAll({ all, limit, offset });
    res.status(200).json(movies);
  }
  catch (err) {
    next(err)
  }
}

