FROM node:10 AS builder
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci
COPY . /app/
RUN npm run build

FROM nginx:latest
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html