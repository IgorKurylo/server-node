FROM node:8-alpine

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

# RUN chmod +x /wait

WORKDIR /usr/app

COPY  package*.json .

RUN npm install --quiet

COPY . .



