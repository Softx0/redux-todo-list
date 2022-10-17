FROM node:14-alpine AS builder
RUN apk add --no-cache git openssh
ENV NODE_ENV ${ENV}
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile
# Copy app files
COPY . .
# Build the app
RUN yarn build


# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as build
ENV NODE_ENV ${ENV}
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]