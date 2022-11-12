const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, '/app/views/index.html'));
});

const movieRoutes = require("./app/routes/movieRoutes");
app.use("/api/movies", movieRoutes);

app.use((error, req, res, next) => {
  console.log("\n\nerror: ", error);
  res.status(500).json({ message: error.message });
});

module.exports = app;