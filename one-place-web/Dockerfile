FROM ubuntu

RUN apt update -y

RUN apt upgrade -y

COPY src /opt/app/src

COPY public /opt/app/public

COPY package.json /opt/app/

COPY package-lock.json /opt/app/

COPY build /opt/app/build

RUN apt install curl -y

RUN apt install npm -y

RUN npm install -g n

RUN n 12.22.9

RUN PATH="$PATH"

WORKDIR /opt/app/

RUN npm install

CMD ["npm", "start"]



