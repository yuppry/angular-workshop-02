FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=my-app-build /app/dist/project-app /usr/share/nginx/html
EXPOSE 80