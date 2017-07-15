FROM jpvillaran/ubuntu-nodejs:latest

# Create App directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 9000

CMD [ "npm", "start" ]
