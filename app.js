const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send(`Movie Api is running`);
});

const movieRoutes = require("./app/routes/movieRoutes");
app.use("/api/movies", movieRoutes);

app.use((error, req, res, next) => {
  console.log("\n\nerror: ", error);
  res.status(500).json({ message: error.message });
});

module.exports = app;