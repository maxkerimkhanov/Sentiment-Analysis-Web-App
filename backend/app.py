from flask import Flask, jsonify, request, make_response
from inference import load_model, inference
from langdetect import detect


app = Flask(__name__)
# Загрузка моделей для анализа текста на русском и английском языке
model_ru = load_model("models/model_ru.joblib")
model_en = load_model("models/model_en.joblib")


# Связывание URL-адреса "/test" (метод GET) с функцией tesing для
# проверки состояния соединения
@app.route("/test", methods=["GET"])
def tesing():
    # Отправка на фронтенд JSON-файла {"Test": "OK"}
    return make_response(jsonify({"Test": "OK"}), 200)


# Связывание URL-адреса "/predict" (метод POST) с функцией get_predict для
# выдачи предсказания модели
@app.route("/predict", methods=["POST"])
def get_predict():
    # Чтение JSON-файла с текстом, который ввел пользователь
    data = request.get_json()
    text = data["text"]
    model = model_en
    if detect(text) == "ru":
        model = model_ru
    # Выполение прдесказания модели
    prediction = inference(model=model, text=text)
    # Отправка на фронтенд JSON-файла с результатами предсказания
    res = make_response(jsonify(prediction), 201)
    return res
