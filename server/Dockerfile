###############################################################################
FROM node:9-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait


ENV NODE_ENV=production


WORKDIR /home/node/app

RUN apk update

RUN apk install  sequelize-cli mysql2

RUN sequelize db:migrate

# Install deps for production only
COPY ./package* ./
RUN npm install && \
    npm cache clean --force
# Copy builded source from the upper builder stage
COPY . .
# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 8082
# Start the app
CMD /wait &&  npm start