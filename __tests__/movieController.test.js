const httpMocks = require("node-mocks-http");

const MovieController = require("../app/controllers/movieController")
const MovieService = require("../app/services/movieService")

jest.mock("../app/services/movieService")

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  // next = null;
  //We are  going to use the next on the error unit test so we will use jest.fn()
  next = jest.fn();
});

describe("MovieController.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieController.fetchMovies).toBe("function");
  })

  it("should call ServiceMovie.findAll()", () => {
    MovieController.fetchMovies(req, res);
    expect(MovieService.findAll).toHaveBeenCalled()
  })
})