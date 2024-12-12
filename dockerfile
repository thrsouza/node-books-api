FROM node

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN corepack enable

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]
