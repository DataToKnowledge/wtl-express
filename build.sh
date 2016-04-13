#!/usr/bin/bash


docker build -t data2knowledge/wtl-api-node:0.5.5 .
docker rm -f wtl-api-node && docker run -dt --name wtl-api-node data2knowledge/wtl-api-node:0.5.5
