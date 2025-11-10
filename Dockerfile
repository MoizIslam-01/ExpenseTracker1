FROM node:20

WORKDIR /usr/src/app

# Copy everything including dist folder
COPY . .

# Expose port
EXPOSE 3000

# Start Vite preview
CMD ["npm", "run", "start"]
