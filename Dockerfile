FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache git && npm ci

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npm run start:prod"]
