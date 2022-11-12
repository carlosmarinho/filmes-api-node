const httpMocks = require("node-mocks-http");

const MovieService = require("../../app/services/movieService")
const movies = require("../mocks/movies.json");
const newMovie = require("../mocks/newMovie.json")


jest.mock("../../app/services/movieService")

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

  // it("should call MoviesService.create", async () => {
  //   req.body = newMovie;
  //   await MovieService.createMovie(req, res, next);
  //   expect(MovieService.createMovie).toBeCalled();
  // });

  // it("should return 201 response code", async () => {
  //   req.body = newMovie;
  //   await MovieController.createMovie(req, res, next);
  //   expect(res.statusCode).toBe(201);
  //   expect(res._isEndCalled()).toBeTruthy();
  // });

})

describe("MovieService.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieService.findAll).toBe("function");
  })

  // it("should call ServiceMovie.findAll()", () => {
  //   MovieService.fetchMovies(req, res);
  //   expect(MovieService.findAll).toHaveBeenCalled()
  // })

  // it("Should return response with status 200 and all movies", async () => {
  //   MovieService.findAll.mockReturnValue(movies);
  //   await MovieService.fetchMovies(req, res);

  //   expect(res.statusCode).toBe(200);
  //   expect(res._isEndCalled).toBeTruthy();
  //   expect(res._getJSONData()).toStrictEqual(movies);
  // })

})