FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
copy . .
EXPOSE 8080
COPY wait-for-it.sh /wait
RUN chmod +x /wait
CMD sh /wait/wait-for-it.sh && npm run dev 
