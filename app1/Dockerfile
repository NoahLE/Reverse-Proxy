# Base system setup and update
FROM node:9
RUN apt-get update && apt-get upgrade -y

# Make project folders
RUN mkdir -p /app
WORKDIR /app

# Add project files
RUN npm install -g nodemon
ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
ADD app.js /app/app.js

# Set project up
RUN npm install
EXPOSE 3000

# Default command
# CMD ["npm", "start"]