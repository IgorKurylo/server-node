<<<<<<< HEAD
FROM node:latest

WORKDIR /usr/src/app

COPY package.*json ./
=======
FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
>>>>>>> cd867913567df8d40419d4de50da62b7b3625f23

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
