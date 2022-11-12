const express = require("express");
const { fetchMovies, createMovie } = require("../controllers/movieController");

const router = express.Router();

router.get("/", fetchMovies);
router.post("/", createMovie);

module.exports = router;