FROM node:8.15-alpine

COPY  package.json ./

RUN npm install 

COPY . .

RUN chmod +x ./wait-for-it.sh



