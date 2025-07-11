FROM node:13

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install react-router-dom@5 --save-exact

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
