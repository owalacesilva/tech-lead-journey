FROM --platform=linux/amd64 node:20.6.1-alpine3.18 AS base

RUN apk update
RUN apk add --no-cache dumb-init bash wget curl nginx
RUN mkdir -p /workspace

WORKDIR /workspace

FROM base AS dependencies

RUN npm install -g npm@10.2.0
RUN npm install -g @nestjs/cli

COPY ./package*.json ./

RUN npm install

COPY . .

FROM dependencies AS builder

COPY ./.docker/nginx/ /etc/nginx/

RUN npm run build
RUN ln -sf /dev/stderr /var/log/nginx/error.log

STOPSIGNAL SIGTERM
EXPOSE 80

CMD ["/bin/bash", "-c", "npm run start:prod & nginx -g 'daemon off;'"]