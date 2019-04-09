# Base image
FROM node:10

# Work directory
WORKDIR /usr/ildiesign

# Install dependencies
COPY ./package*.json ./

RUN npm install

# Copy app source code
COPY ./ ./

# Start command
CMD [ "npm", "run", "launch" ]
