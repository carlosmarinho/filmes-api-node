const httpMocks = require("node-mocks-http");
const MovieService = require("../../app/services/movieService");

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  //We are  going to use the next on the error unit test so we will use jest.fn()
  next = jest.fn();
});

describe("MovieService.createMovie", () => {
  it("should have a createMovie function", () => {
    expect(typeof MovieService.createMovie).toBe("function");
  });
})

describe("MovieService.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieService.findAll).toBe("function");
  })
})