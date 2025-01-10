FROM node:18-alpine AS builder

WORKDIR /nxtrendz-app

COPY package.json .

RUN npm install

COPY . .

RUN npm rum build

#Stage 2

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /nxtrendz-app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]