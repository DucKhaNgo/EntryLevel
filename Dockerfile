FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm i --save-dev @types/cors

COPY . .

RUN npm run build