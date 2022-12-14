const Prisma = require('@prisma/client');
const axios = require('axios');
const prisma = new Prisma.PrismaClient();

exports.loadFilms = async () => {
  const films = await axios.get('https://ghibliapi.herokuapp.com/films?fields=id,title,original_title,description,rt_score,release_date&limit=200&');
  const newFilms = films.data.map(film => ({
    title: film.title,
    originalTitle: film.original_title,
    description: film.description,
    score: parseInt(film.rt_score),
    releaseDate: parseInt(film.release_date)
  }))

  return await prisma.movie.createMany({
    data: newFilms
  })
}
