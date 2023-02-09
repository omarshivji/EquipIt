FROM node:alpine
WORKDIR /server/
COPY package.json .
RUN npm install 
COPY server.js .
CMD ["node", "server.js"]