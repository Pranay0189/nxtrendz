FROM node:18-alpine AS build

WORKDIR /main-app

COPY package*.json /main-app/

RUN npm install

COPY . /main-app/

RUN npm run build 


#Stage -2

FROM node:18-alpine

WORKDIR /main-app

RUN npm install -g serve

COPY --from=build /main-app/dist /main-app/dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"] 