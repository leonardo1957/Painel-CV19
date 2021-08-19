FROM node:14-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install yarn --silent
RUN npm install react-scripts --silent
RUN yarn install
CMD ["yarn", "start"]