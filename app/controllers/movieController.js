const MovieService = require('../services/movieService')
const { loadFilms } = require('../services/loadMovieService')


exports.loadFilms = async (req, res, next) => {
  try {
    await loadFilms();
    res.status(201).json({ message: "List of films successfully imported!" })
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
  const limit = req.query.limit || 100;
  const offset = req.query.offset;

  try {
    const movies = await MovieService.findAll({ limit, offset });
    res.status(200).json(movies);
  }
  catch (err) {
    next(err)
  }
}

