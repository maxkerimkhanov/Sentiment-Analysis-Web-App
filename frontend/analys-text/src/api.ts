import { IAnalyseText } from "./types";

// !!!!!!!!
const BackendURL = "/predict";
// =========

export const analyseText = async (text: string): Promise<IAnalyseText> => {
  try {
    const reasult = await fetch(BackendURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text}),
    });

    if (!reasult.ok) {
      throw new Error(reasult.statusText);
    }
    return reasult.json();
  } catch (e) {
    throw e;
  }
};
