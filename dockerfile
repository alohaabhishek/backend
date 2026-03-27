# Use official Node.js image
FROM node:20.11.0

# Set working directory inside container
WORKDIR /app

# Copy package.json & package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]