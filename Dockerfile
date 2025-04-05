FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends git && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN mkdir /react
ENV FRONT_ROOT /react
WORKDIR $FRONT_ROOT

COPY package.json yarn.lock $FRONT_ROOT/
RUN yarn install --frozen-lockfile --ignore-optional

CMD ["yarn", "start"]
# CMD ["tail", "-f", "/dev/null"]