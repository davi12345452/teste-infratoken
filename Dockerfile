# Use an official Node.js runtime as the base image
# This line specifies the base image for the Docker image. In this case, we're using an official Node.js runtime image with version 18.18 and the # Alpine Linux distribution.
FROM node:18.18-alpine

# This line sets the working directory inside the container to /usr/src/app. This is where we'll copy our application code and where the # application will run.
WORKDIR /usr/src/app

# This line installs the build-base package using the Alpine package manager (apk). This package includes the necessary tools for building   
# native Node.js modules.
RUN apk add build-base

# This line installs Python 3 using the Alpine package manager. Python is required for some Node.js modules that have native dependencies.
RUN apk add python3

# This line installs the node-gyp package globally using npm. node-gyp is a tool for building native Node.js modules.
RUN npm install -g node-gyp

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# This line generates the Prisma client code based on the schema defined in the application.
RUN npx prisma generate

# Expose the port that your application will run on (Nest.js default is 3000)
EXPOSE 8000

CMD [ "npm", "run", "start" ]