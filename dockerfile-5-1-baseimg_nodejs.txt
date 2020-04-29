FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
workdir /home/node/app
COPY package.json ./
RUN npm install
COPY --chown=node:node  . .
RUN apt-get update && apt-get upgrade -y
EXPOSE 8068
CMD node ubuntu-server.js