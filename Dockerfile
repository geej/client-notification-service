FROM node:8.9.4-alpine

WORKDIR /app
ADD . /app

RUN ["npm", "install"]
CMD ["node", "index.js"]