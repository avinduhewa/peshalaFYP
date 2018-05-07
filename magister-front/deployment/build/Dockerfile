### STAGE 1: Build ###

FROM node:8-alpine

COPY package.json package-lock.json ./

RUN npm set progress=true && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
# RUN $(npm bin)/ng build --prod --build-optimizer
RUN $(npm bin)/ng build  --dev --env=dev --output-hashing=true