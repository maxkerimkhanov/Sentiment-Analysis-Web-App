# Базовый образ
FROM python:3.9
# Текущая рабочая директория
WORKDIR /app
# Копировние файла зависимостей из локальной директории в рабочую директорию образа
COPY ./requirements.txt ./requirements.txt
# Установка и обновление pip, установка пакетов из файла зависимостей
RUN python -m pip install --upgrade pip && pip install -r requirements.txt
# Открытие порта
EXPOSE 8000
# Копировние файлов из локальной директории в рабочую директорию образа
COPY ./models/ ./models
COPY ./app.py ./app.py 
COPY ./inference.py ./inference.py
COPY ./wsgi.py ./wsgi.py 
# Запуск сервера с приложением на gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "wsgi:app"]