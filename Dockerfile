FROM node:lts-alpine

WORKDIR /catbot
COPY app/package*.json .
RUN npm install --production

USER catbot
COPY --chown=catbot:catbot /app .
COPY catbot-config/.env .
CMD ["npm", "start"]
