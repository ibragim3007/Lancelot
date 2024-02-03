FROM --platform=linux/amd64 node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD [ "node", "./dist/src/server.js" ]
