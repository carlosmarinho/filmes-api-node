const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();

exports.createMovie = async (movie) => {

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