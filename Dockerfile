FROM node:alpine
RUN apk update && apk add bash
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx prisma generate

EXPOSE 3000
CMD npm start
