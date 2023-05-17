FROM node:20.2.0-slim
WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install
