import { IconError } from "../Icons/IconError/IconError";
import { IconSuccess } from "../Icons/IconSuccess/IconSuccess";
import { IconWarning } from "../Icons/IconWarning/IconWarning";
import { AnalyseType, IAnalyseText } from "../types";

import "./AnalyseResult.css";

interface AnalyseResultProps {
  resultAnalyseText: IAnalyseText | null;
}
export const AnalyseResult = ({ resultAnalyseText }: AnalyseResultProps) => {
  if (!resultAnalyseText) return null;

  const { type, text } = resultAnalyseText;

  const renderIcon = () => {
    if (type === AnalyseType.SUCCSES) {
      return <IconSuccess />;
    }
    if (type === AnalyseType.WARNING) {
      return <IconWarning />;
    }
    if (type === AnalyseType.ERROR) {
      return <IconError />;
    }
    return <IconWarning />;
  };
  return (
    <div className="wrapper">
      {renderIcon()}
      <h4>{text}</h4>
    </div>
  );
};
