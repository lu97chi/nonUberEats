ARG FIREBASE_AUTH_TOKEN
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm config set @bit:registry https://node.bit.dev
RUN npm install -g firebase-tools
RUN npm install
COPY . .
RUN npm run build
RUN firebase deploy --token $FIREBASE_AUTH_TOKEN
