FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends git && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir /react
ENV FRONT_ROOT /react
WORKDIR $FRONT_ROOT

COPY package.json yarn.lock $FRONT_ROOT/ 
RUN yarn install --frozen-lockfile --ignore-optional

CMD ["yarn", "start"]

# FROM node:18.13.0-alpine

# RUN apk add --no-cache git

# RUN mkdir /react
# ENV FRONT_ROOT /react
# WORKDIR $FRONT_ROOT

# COPY package.json yarn.lock $FRONT_ROOT/ 
# RUN yarn install --frozen-lockfile --ignore-optional

# COPY . $FRONT_ROOT

# CMD ["yarn", "start"]