FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]