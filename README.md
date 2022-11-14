# Filmes API Node

# Installation

Run the following commands

 - Clone the application from https://github.com/carlosmarinho/filmes-api-node.git
    ```
    git clone https://github.com/carlosmarinho/filmes-api-node.git
    ```

 - Get into the Filmes API folder
    ```
      cd filmes-api-nodeS
    ```

 - create .env file with content below:
    ```
    DATABASE_URL="postgresql://postgres:postgres@postgres:5432/movies?schema=public"
    ```

 - Now we need to npm install to have Primsa installed to later run the migrations and the seed
    ```
    npm install
    ```

 - Now we can generate prisma app
    ```
    docker compose run prisma-postgres-api npx prisma generate
    ```

 - After this we can create the tables from the database running the migrations
    ```
    docker compose run prisma-postgres-api npx prisma migrate dev
    ```

- We start our container with the following command
    ```
    docker-compose up --build
    ```

The last command will run the container in the development environment.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tecnologies used in the backend

 - Node.js
 - Express
 - PostgreSQL
 - Prisma
 - Docker
 - TDD

## Development
I started developing this API using TDD, you can follow up on github commits the tests are located at /__tests__ folder, but because the lack of time, I had to stop the tests, and I'm creating a @todo pointing the missing tests. 

I create the prisma schema located in /prisma/schema.prisma, from this file prisma generate the migrations. We also have the controllers, services and routes folders that is located in the '/app' directory.

 - /app/routes - Responsible to fetch the routes
 - /app/controller - When we call an api, the application is started at the server.js, where include the routes that will redirect to the proper controller that should handle any business logical (as we don't have many business logic, I prefer let this way then create another layer, that could be called models) and integrate with the services.
 - /app/services - It will be responsible to call the prisma datamodel and deal with the database logic.

## API

### Movies

  - GET http://localhost:3000/ - Show an HTML page with all endpoints available.
  - GET http://localhost:3000/api/movies - It fetchs a list of films ordered by Release Date (year) and return a json list of them. If no params passed it will fetch a maximum of 100 films
    - Params: We can pass two params, 'limit' and 'offset'
      - limit: Numbers of films API will fetch
      - offset: Numbers of films to be skipped
  - GET http://localhost:3000/api/movies/loadFilms - It search for a list of films on an external api https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API (there is only 22 films registered on this external API) and store the loaded films on a local database. 
    - If you try running the endpoint twice without cleaning the database you probably got an error, cause I added a unique constraint on title film to not duplicate films when importing.
  - POST http://localhost:3000/api/movies/ {title:string, originalTitle:string, description:string, score:int, releaseDate:int} - It create a new film on the local database. 

## @TODO

### Test

  - As the urgency and the lack of time I couldn't finish all tests yet, but we were also supposed to test the whole functions on the services not only on the controller. .
  - Create integration test.

### Create Endpoint API to update, delte Films

  - Create an Endpoint Api to update a film
  - Create an Endpoint Api to delete a film

### Create the enviroment for stage and production

  - In the Dockerfile we have only the .dev that is created from base, we should create the stage and production in the Dockerfile or we can create different dockerfile for each environment.

  - Should change the docker-compose.yaml to work with envs, so we can handle all necessary environments.
