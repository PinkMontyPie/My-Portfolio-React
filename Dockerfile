FROM node:20.12.2-alpine3.19

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json yarn.lock ./

COPY . /usr/src

RUN yarn install
RUN yarn build

EXPOSE 3000

ENV DEBUG=true

CMD ["yarn", "start"]
