import React from "react";
import { AnalysDesk } from "./AnalysDesk/AnalysDesk";
import { Title } from "./Title/Title";

export const App = () => {
  return (
    <div className="container">
      <Title />
      <AnalysDesk />
    </div>
  );
};
