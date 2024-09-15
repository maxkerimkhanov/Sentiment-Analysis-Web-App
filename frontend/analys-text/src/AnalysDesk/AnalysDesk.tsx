import { FC, useState } from "react";
import { InputField } from "../InputField/InputField";
import { IAnalyseText } from "../types";
import { Loader } from "../Loader/Loader";
import "./AnalysDesk.css";
import { AnalyseResult } from "../AnalyseResult/AnalyseResult";

export const AnalysDesk: FC = () => {
  const [resultAnalyseText, setResultAnalyseText] =
    useState<IAnalyseText | null>(null);

  const [isLoading, setLoading] = useState(false);

  return (
    <main className="main">
      <InputField
        setLoading={setLoading}
        setResultAnalyseText={setResultAnalyseText}
      />
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <AnalyseResult resultAnalyseText={resultAnalyseText} />
        )}
      </section>
    </main>
  );
};
