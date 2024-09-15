import argparse
import warnings

import joblib
from transformers import pipeline


warnings.simplefilter(action='ignore', category=FutureWarning)


# Чтение параметров "--path_to_model" и "--path_to_textfile" из командной строки
def get_argparse() -> argparse.Namespace:

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--path_to_model",
        type=str,
        required=True,
        help="path to trained model"
    )
    parser.add_argument(
        "--path_to_textfile",
        type=str,
        required=True,
        help="path to file with text"
    )

    return parser.parse_args()


# Функия для загрузки модели
def load_model(path_to_model: str) -> pipeline:
    return joblib.load(path_to_model)


# Функия для выдачи прогноза модели
def inference(model: pipeline, text: str) -> dict:

    result = dict.fromkeys(["text", "type"])

    prediction = model(text)
    if prediction[0]["label"].lower() in {"neutral", "neu"}:
        result["text"] = "Текст с нейтральной эмоциональной окраской"
        result["type"] = 1
    if prediction[0]["label"].lower() in {"positive", "pos"}:
        result["text"] = "Текст с позитивной эмоциональной окраской"
        result["type"] = 0
    if prediction[0]["label"].lower() in {"negative", "neg"}:
        result["text"] = "Текст с негативной эмоциональной окраской"
        result["type"] = 2

    return result


if __name__ == "__main__":

    args = get_argparse()

    model = load_model(path_to_model=args.path_to_model)

    with open(args.path_to_textfile, mode='r', encoding='utf-8') as file:
        text = file.read()

    result = inference(model=model, text=text)
