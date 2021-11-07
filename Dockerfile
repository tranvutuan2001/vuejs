FROM nginx
COPY ./src /home/tuan/app/src
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
