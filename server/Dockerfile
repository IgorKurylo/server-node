###############################################################################
FROM node:9-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait


ENV NODE_ENV=production


WORKDIR /home/node/app

COPY ./package* ./
RUN npm install && \
    npm cache clean --force
# Copy builded source from the upper builder stage
COPY . .
## Set environment to "development" by default

ENV NODE_ENV development

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 8082
# Start the app

COPY ./docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

CMD /wait && /docker-entrypoint.sh &&  npm start

