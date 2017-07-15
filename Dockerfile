FROM localhost:5000/ubuntu-nodejs-base
MAINTAINER John Paul Villaran
EXPOSE 9000

# Create App directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

RUN node index.js

