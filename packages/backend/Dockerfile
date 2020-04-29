FROM node:10.17.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn install
ENV NODE_ENV=production
EXPOSE 8080
RUN yarn build
CMD node ./lib/src/index.js
