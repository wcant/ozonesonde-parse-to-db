# Use an official Node.js runtime as the base image
FROM node:20.6.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on (if needed)
EXPOSE 3000

# Start your application
CMD ["npm", "start"]
