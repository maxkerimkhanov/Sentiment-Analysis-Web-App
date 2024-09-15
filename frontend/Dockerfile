# Базовый образ node
FROM node:17 AS BUILD
# Текущая рабочая директория
WORKDIR /app
# Копировние файла package.json из из локальной директории в 
# рабочую директорию образа
COPY ./analys-text/package.json ./package.json
# Запуск установки необходимых пакетов
RUN npm i
# Копировние папки analys-text из из локальной директории в 
# рабочую директорию образа
COPY ./analys-text ./
# Команда на запуск процесса сборки
RUN npm run build

# Второй этап сборки на базе образа nginx
FROM nginx
# Копирование артефактов с первого этапа сборки (index.html, css, js) в
# папку /nginx/static/
COPY --from=BUILD /app/dist/index.html /nginx/static/index.html
COPY --from=BUILD /app/dist/static/css /nginx/static/
COPY --from=BUILD /app/dist/static/js /nginx/static/