FROM node:22-bookworm-slim
WORKDIR /app
RUN corepack enable
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["tail", "-f", "/dev/null"]