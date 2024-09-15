# Sentiment Analysis Web App for Russian and English Texts
![alt text](https://github.com/maxim-kerimkhanov/Sentiment-Analysis-Web-App/blob/main/example.gif)
### Transform NLP models to Service with:
- Flask
- Gunicorn
- Nginx
- Docker Compose
### Description
1. The client sends the request to the Nginx server
2. Nginx proxies the request to Gunicorn using the proxy pass directive
3. Gunicorn passes the user's request to Flask
4. Flask processes the request, generates a response, and sends it to Gunicorn
5. Gunicorn sends the result to Nginx, which forwards it to the client

Nginx is also used to serving static content.
### Sentiment Analysis
- Shows whether text content is positive, negative or neutral
## Start Service
Now, to start the application, do the following:

First, download pretrained models from the link (https://disk.yandex.ru/d/Kq7cTyHZJQXrbQ) and put them to “/models” folder.

In the **frontend** folder build Docker-image for Nginx
```
docker build -t nlp_nginx .
```
In the **backend** folder build Docker-image for backend
```
docker build -t nlp_back .
```
And finally, in the root folder, execute
```
docker compose up
```
Open your web browser and navigate to http://localhost:80 to start application.
