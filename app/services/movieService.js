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
  return await prisma.movie.findMany({
    skip: params.offset ? parseInt(params.offset) : undefined,
    take: params.limit ? parseInt(params.limit) : undefined
  });
} 