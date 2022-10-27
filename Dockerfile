# build step

FROM node:16.15 as build
WORKDIR /usr/src/drivent
COPY ./package*.json ./
COPY ./tsconfig*.json ./
COPY ./prisma ./prisma
COPY ./.husky ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# run step

FROM node:16.15
WORKDIR /usr/src/drivent
COPY ./package*.json ./
COPY ./prisma ./prisma
RUN npm install --location=global npm@8.19.2 --only=production --ignore-scripts --legacy-peer-deps
RUN npm i -g bcrypt
RUN npm link bcrypt
COPY --from=build /usr/src/drivent/dist ./dist