# Create image based on the official Node 8.6.0 image from dockerhub
FROM node:8.6.0

# Create a directory where our app will be placed
RUN mkdir /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
EXPOSE 4200 4000 49153 9876 8080

# Serve the app
CMD ["npm", "run", "start"]