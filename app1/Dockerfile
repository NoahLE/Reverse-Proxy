# Base system setup and update
FROM node:9
RUN apt-get update 
# Add this in later: && apt-get upgrade -y

# Make project folders
RUN mkdir -p /app
WORKDIR /app

# Add project files
ADD app.js /app/app.js
ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm install

# Default command
CMD ["npm", "start"]

# Set project up
EXPOSE 3000