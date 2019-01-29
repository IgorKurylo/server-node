FROM node:8-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8082

CMD /wait node server.js


