FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn --prod

USER node

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]