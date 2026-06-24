# Use a secure, lightweight Node.js base image
FROM node:22-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the lockfile and package manifest first
COPY package*.json ./

# Enforce a strict, script-free installation
RUN npm ci --ignore-scripts

# Copy the rest of your application code
COPY . .

# Run the application
CMD ["node", "app.js"]