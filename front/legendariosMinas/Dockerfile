FROM ubuntu/nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY ./dist/legendarios-minas .
EXPOSE 80
