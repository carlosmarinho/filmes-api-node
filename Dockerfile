FROM node:alpine as base
RUN apk update && apk add bash
WORKDIR /app
EXPOSE 3000

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

FROM base as dev

RUN npm install
RUN npx prisma generate
RUN npm install -g nodemon && npm install
RUN npm install -g --save-dev jest
COPY . .
CMD ["nodemon", "server.js"]
