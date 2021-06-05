FROM node:lts-alpine

WORKDIR /usr/catbot
COPY package*.json .
RUN npm install --production

COPY --chown=node:node . .
USER node
CMD ["npm", "start"]
