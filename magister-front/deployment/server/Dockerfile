
### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY deployment/server/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
# COPY --from=builder /ng-app/dist /usr/share/nginx/html

COPY dist /usr/share/nginx/html


EXPOSE 80 443
