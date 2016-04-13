FROM node:5.10.0

COPY . /app

WORKDIR /app

RUN npm install

CMD node .
