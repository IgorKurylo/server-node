###############################################################################
FROM node:9-alpine

ENV NODE_ENV=production

WORKDIR /home/node/app

# Install deps for production only
COPY ./package* ./
RUN npm install && \
    npm cache clean --force
# Copy builded source from the upper builder stage
COPY . .
# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 8082
# Start the app
CMD npm start