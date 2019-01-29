FROM node:8.15-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

COPY  package.json ./

RUN npm install 

COPY . .

CMD /wait mysql-db:3306 -- sequelize db:migrate && npm start


