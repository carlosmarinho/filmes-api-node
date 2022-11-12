const httpMocks = require("node-mocks-http");

const MovieService = require("../../app/services/movieService")
// const movies = require("../mocks/movies.json");
const newMovie = require("../mocks/newMovie.json")

jest.spyOn(prisma.movie, "create").mockImplementation();

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  //We are  going to use the next on the error unit test so we will use jest.fn()
  next = jest.fn();
});

describe("MovieService.createMovie", () => {
  beforeEach(() => {
    req.body = newMovie;
  });

  it("should have a createMovie function", () => {
    expect(typeof MovieService.createMovie).toBe("function");
  });

})

describe("MovieService.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieService.findAll).toBe("function");
  })

})