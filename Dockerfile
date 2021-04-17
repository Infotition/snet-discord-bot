FROM node:14

WORKDIR /usr/src/discord

COPY package*.json .

RUN npm install

COPY build .

EXPOSE 3000

CMD ["node", "index.js"]

