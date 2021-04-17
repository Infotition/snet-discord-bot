FROM node:14

WORKDIR /usr/src/discord

COPY package*.json .

RUN npm install --only=prod

COPY build .

EXPOSE 3000

CMD ["npm", "start"]

