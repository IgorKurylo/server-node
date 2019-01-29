FROM node:8.15.0-alpine

WORKDIR /home/nodeapp

COPY  package.json /home/nodeapp

RUN npm install

COPY . /home/nodeapp

CMD node server.js

EXPOSE 8082


