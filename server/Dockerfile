FROM node:8-alpine

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

# RUN chmod +x /wait

RUN mkdir -p /opt/app

WORKDIR /opt

COPY  package*.json /opt/app

RUN npm install && npm cache clean --force

WORKDIR /opt/app

COPY . /opt/app

EXPOSE 8082

CMD ["node" "server.js"]


