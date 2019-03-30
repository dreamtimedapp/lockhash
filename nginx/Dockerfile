
# Set nginx base image
FROM nginx:1.14.2

MAINTAINER tianling.lk


COPY nginx.conf /etc/nginx/nginx.conf
COPY fastcgi.conf /etc/nginx/fastcgi.conf

RUN RUN chown -R www-data:www-data /var/www
RUN chown -R 33 /var/www
RUN chmod 755 /var/www


