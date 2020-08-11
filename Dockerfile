FROM node:12

WORKDIR /app/

COPY ./package*.json ./

ARG NPM_REGISTRY
ARG BUILD_ENV
ARG API_PORT

RUN npm config set registry ${NPM_REGISTRY:-https://registry.npmjs.org/}
RUN npm install -g pm2
RUN npm i

COPY . .

EXPOSE ${API_PORT:-3000}

CMD pm2-runtime start ecosystem.config.js --env ${BUILD_ENV:-production}
