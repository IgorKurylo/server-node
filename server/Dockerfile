FROM node:8.15-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

COPY  package.json ./

RUN npm install 

COPY . .

RUN chmod +x ./wait-for-it.sh

CMD /wait &&  npm start


