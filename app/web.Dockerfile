FROM node:18.17.1-slim
WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install
