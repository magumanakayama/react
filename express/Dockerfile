FROM node:22-bookworm-slim
WORKDIR /express_app
COPY index.js ./
COPY package*.json ./
RUN yarn install --production=false
EXPOSE 8000
CMD ["yarn", "start"]
