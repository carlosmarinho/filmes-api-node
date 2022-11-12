const httpMocks = require("node-mocks-http");

const MovieController = require("../app/controllers/movieController")
const MovieService = require("../app/services/movieService")
const movies = require("./mocks/movies.json");
const newMovie = require("./mocks/newMovie.json")


jest.mock("../app/services/movieService")

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  // next = null;
  //We are  going to use the next on the error unit test so we will use jest.fn()
  next = jest.fn();
});

describe("MovieController.createMovie", () => {
  beforeEach(() => {
    req.body = newMovie;
  });

  it("should have a createMovie function", () => {
    expect(typeof MovieController.createMovie).toBe("function");
  });
})

describe("MovieController.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieController.fetchMovies).toBe("function");
  })

  it("should call ServiceMovie.findAll()", () => {
    MovieController.fetchMovies(req, res);
    expect(MovieService.findAll).toHaveBeenCalled()
  })

  it("Should return response with status 200 and all movies", async () => {
    MovieService.findAll.mockReturnValue(movies);
    await MovieController.fetchMovies(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(movies);
  })

  it("should handle errors in fetchMovies", async () => {
    const errorMessage = { message: "Error finding" };
    const rejectedPromise = Promise.reject(errorMessage);
    MovieService.findAll.mockReturnValue(rejectedPromise);
    await MovieController.fetchMovies(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  })
})