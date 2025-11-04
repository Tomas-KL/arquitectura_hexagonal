# BUILD imagen
FROM node:18-alpine

WORKDIR /usr/src/app

# Instalar dependencias
COPY package*.json ./
RUN npm ci --only=production

# Copiar el resto
COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "src/index.js"]
