# from node & alpine
FROM node:16.14-alpine3.15

# set directory you will like to install your app
WORKDIR /iKapp

# copy package.json file over to docker
COPY ./package.json .

# npm install from the package.json file
RUN echo 'IK INSTALLING NPM' && npm run ikupdate

# copy everything to docker images
COPY . .

# build you docker images 
RUN echo 'IK BUILDING PRODUCTION FILES' && npm run build

# run you production server
CMD echo 'IK NOW RUNNING SERVER' && node src/server.js