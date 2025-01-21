FROM node:16

WORKDIR /main-app 

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

