FROM node:18-alpine

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json yarn.lock ./

COPY . /usr/src

RUN yarn install
RUN yarn build

EXPOSE 8080

ENV DEBUG=true

CMD ["yarn", "start"]
