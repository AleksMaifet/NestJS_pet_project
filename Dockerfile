FROM node:18-alpine as builder

WORKDIR opt/src

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR opt/src

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder opt/src/dist ./dist

EXPOSE 8080

CMD [ "node", "dist/main.js" ]
