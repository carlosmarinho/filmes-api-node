const MovieController = require("../app/controllers/movieController")
describe("MovieController.getMovies", () => {
  it("should have a fetchMovies function", () => {
    expect(typeof MovieController.fetchMovies).toBe("function");
  })
})