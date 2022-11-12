const Prisma = require('@prisma/client');
const axios = require('axios');
const prisma = new Prisma.PrismaClient();

exports.loadFilms = async () => {
  try {
    const movies = await axios.get('https://ghibliapi.herokuapp.com/films');

  }
  catch (err) {
    console.log("err: ");
  }
}

exports.createMovie = async (movie) => {

  console.log('\n\n***\n Movie: ', movie, '\n***\n');

  return await prisma.movie.create({
    data: {
      ...movie,
    }
  })
}

exports.findAll = async (params) => {
  let movies;
  console.log('\n\n***\n perpage: ', params.offset, params.limit, '\n***\n');
  if (params.all)
    movies = await prisma.movie.findMany();
  else
    movies = await prisma.movie.findMany({
      skip: params.offset,
      take: params.limit
    });
  return movies;
} 