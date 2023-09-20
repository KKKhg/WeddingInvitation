FROM node:16.18.0-alpine
WORKDIR "/app"
COPY ./ ./
RUN npm install
CMD ["npm","run","start"]
