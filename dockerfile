FROM node

WORKDIR /app
COPY package*.json ./

RUN npm install --production --remove-dev

COPY . .

EXPOSE 3000

CMD ["npm", "start:prod"]
