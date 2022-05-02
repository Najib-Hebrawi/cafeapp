#Author RGA797, JensHOls

# syntax=docker/dockerfile:1

FROM node

WORKDIR /home/app/cafeappbackend

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "index.js" ]
