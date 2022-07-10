FROM node:18-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install
RUN npm i -g nodemon

COPY . .

EXPOSE 5000

CMD ["nodemon", "-L", "server.js"]
