#1. base image
FROM node:18-alpine

#2. Working directory inside the container
WORKDIR /app

#3. Copy packages
COPY package*.json ./

#4. Install depencies inside the container
RUN npm install

#5. Copy the rest of the application code
COPY . .

#6. Expose the port the app runs on
EXPOSE 3000

#7. Define the command to start the app
CMD ["node", "index.js"]
