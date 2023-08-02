FROM node:20-alpine

COPY package.json /nodejs-demo-app/
COPY src /nodejs-demo-app/


WORKDIR /nodejs-demo-app

RUN npm install

CMD ["node","server.js"]