FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm config set @bit:registry https://node.bit.dev
RUN npm install
COPY . .
RUN npm run build
