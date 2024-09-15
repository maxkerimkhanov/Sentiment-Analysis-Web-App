import React, { FC } from "react";
import "./Title.css";

export const Title: FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Анализ тональности текста</h1>
      </div>
    </header>
  );
};
