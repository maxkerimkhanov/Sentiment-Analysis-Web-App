import React, { FC } from "react";
import { analyseText } from "../api";
import { IAnalyseText } from "../types";

import "./InputField.css";

interface InputFieldProps {
  setLoading: (val: boolean) => void;
  setResultAnalyseText: (val: IAnalyseText) => void;
}

export const InputField: FC<InputFieldProps> = ({
  setLoading,
  setResultAnalyseText,
}) => {
  const [inputText, setInputText] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim().length) return;
    setLoading(true);
    // Put task to backend
    await analyseText(inputText)
      .then((res) => {
        setResultAnalyseText(res);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="input__button input__submit-button"
        title="Создать"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          className="input__submit-icon"
        >
          <polygon
            points="0,0 10,5 0,10"
            fill="none"
            stroke="var(--constant-black-alpha64)"
          />
        </svg>
      </button>
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        className="input__input-field"
        placeholder="Введите текст на русском или английском языке"
      />
      <button
        type="button"
        className="input__button"
        title="Очистить"
        onClick={() => setInputText("")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M7 17L16.8995 7.10051"
            stroke="var(--constant-black-alpha64)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="var(--constant-black-alpha64)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};
