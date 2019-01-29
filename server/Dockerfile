FROM node:8.15-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait


COPY  package.json ./

RUN npm install 

COPY . .

RUN chmod +x ./wait-for-it.sh

CMD sh -c './wait-for-it.sh'  mysql-db:3306 -- sequelize db:migrate && npm start


