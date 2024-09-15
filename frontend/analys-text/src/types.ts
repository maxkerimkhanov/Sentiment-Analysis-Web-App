export enum AnalyseType {
  SUCCSES,
  WARNING,
  ERROR,
}

export interface IAnalyseText {
  text: string;
  id: string;
  type: AnalyseType;
}
