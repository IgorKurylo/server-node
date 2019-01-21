FROM node:latest
WORKDIR /usr/server_node
COPY package.json /usr/server_node
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "server.js" ]