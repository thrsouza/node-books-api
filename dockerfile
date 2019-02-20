FROM node

WORKDIR /app
COPY package*.json ./

RUN npm install --production --remove-dev

COPY . .

CMD ["npm", "start:prod"]
