FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
USER node
CMD ["node", "app.js"]