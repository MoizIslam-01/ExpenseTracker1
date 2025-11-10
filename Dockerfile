# Base image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve static files
RUN npm install -g serve

# Run the app on port 8081
CMD ["serve", "-s", "dist", "-l", "8081"]
