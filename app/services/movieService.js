const Prisma = require('@prisma/client');
const prisma = new Prisma.PrismaClient();

exports.createMovie = async (movie) => {

  console.log('\n\n***\n Movie: ', movie, '\n***\n');

  const profile = await prisma.movie.create({
    data: {
      ...movie,
    }
  })
}

exports.findAll = (req, res, next) => {

}