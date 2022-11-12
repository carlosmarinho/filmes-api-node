const httpMocks = require("node-mocks-http");

const MovieController = require("../../app/controllers/movieController")
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

describe("MovieController.createMovie", () => {
  beforeEach(() => {
    req.body = newMovie;
  });

  it("should have a createMovie function", () => {
    expect(typeof MovieController.createMovie).toBe("function");
  });

  it("should call MoviesService.create", async () => {
    req.body = newMovie;
    await MovieController.createMovie(req, res, next);
    // expect(MovieService.createMovie).toBeCalledWith(newMovie);
    expect(MovieService.createMovie).toBeCalled();
  });

  it("should return 201 response code", async () => {
    req.body = newMovie;
    await MovieController.createMovie(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "Done property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    MovieService.createMovie.mockReturnValue(rejectedPromise);
    await MovieController.createMovie(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
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