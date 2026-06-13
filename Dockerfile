FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM node:24-alpine AS development

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3333

CMD ["sh", "-c", "node ace migration:run && node ace serve --hmr"]


FROM node:24-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build .

RUN npm ci --omit=dev

EXPOSE 3333

CMD ["sh", "-c", "node ace migration:run --force && node bin/server.js"]
