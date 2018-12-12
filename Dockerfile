FROM node:latest
WORKDIR /user/server_node
COPY package*.json /
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "server.js" ]