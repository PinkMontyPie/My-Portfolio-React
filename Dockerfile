# Use the official Node.js image as the base image with Node version 20
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --production
RUN yarn build

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to allow external access
EXPOSE 8080

# Set environment variable DEBUG to TRUE    
ENV DEBUG=true

# Command to run the application
CMD ["yarn", "run", "start"]
