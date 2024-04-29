FROM node:alpine AS builder

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY
COPY . .

RUN npm install

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]