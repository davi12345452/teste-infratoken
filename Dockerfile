# Use uma imagem base do Node.js
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma migrate deploy

CMD ["node", "src/index"]