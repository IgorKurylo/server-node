FROM node:8.15-alpine

COPY  package.json ./

RUN npm install 

COPY . .

RUN chmod +x ./wait-for-it.sh

CMD sh -c './wait-for-it.sh'  mysql-db:3306 -- sequelize db:migrate && npm start


