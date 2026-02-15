# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY ./ ./nodeapi/
RUN cd nodeapi && npm install

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /nodeapi/ ./
EXPOSE 5000
CMD ["/bin/sh", "-c", "cd /usr/src/app/ && npm start"]
