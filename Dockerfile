FROM node:18-alpine

WORKDIR /app

COPY ./package.json /app
COPY ./yarn.lock /app
RUN yarn install

COPY . /app
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", ".output/server/index.mjs"]