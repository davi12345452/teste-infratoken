# Use uma imagem base do Node.js
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["node", "src/index"]