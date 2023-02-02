FROM ubuntu/nginx:1.18-20.04_beta
COPY certs /root/certs
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY ./dist/legendarios-minas .
EXPOSE 80
EXPOSE 443



# Build imagem Docker: docker build -t legendarios-front .
