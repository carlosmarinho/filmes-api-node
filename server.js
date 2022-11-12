const express = require('express');
// import { PrismaClient } from '@prisma/client'

const app = express();
// const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (_req, res) => {
  res.send(`Movie api is running: ${port}`);
});

const movieRoutes = require("./app/routes/movieRoutes");
app.use("/api/movies", movieRoutes);

app.use((error, req, res, next) => {
  console.log("\n\nerror: ", error);
  res.status(500).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})