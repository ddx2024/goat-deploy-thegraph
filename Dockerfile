FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["sh", "-c", "sleep 10 && npm run create-local && npm run deploy-local"]
