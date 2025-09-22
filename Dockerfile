FROM node:22-alpine3.21

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "npm","run", "start" ]