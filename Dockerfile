FROM node:5.10.0

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 9000

CMD DEBUG=SearchkitExpress node server.js
