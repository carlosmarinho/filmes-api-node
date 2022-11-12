const express = require("express");
const { fetchMovies, loadFilms, createMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/", fetchMovies);
router.get("/loadFilms", loadFilms);
router.post("/", createMovie);

module.exports = router;