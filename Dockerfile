FROM node:18-alpine AS build

WORKDIR /nxtrendz-app

COPY package*.json /.

RUN npm install

ADD . .

#Stage-2 Run the Application
FROM node:16-slim AS runtime

WORKDIR /nxtrendz-app

COPY --from=build /nxtrendz-app /nxtrendz-app

EXPOSE 3000 

CMD [ "npm", "run", "dev"]