import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express();
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (_req, res) => {
  res.send(`Server is running on port: ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})