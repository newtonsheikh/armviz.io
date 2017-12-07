export type Variable = string | object | any[];

export interface Variables {
  [variableName: string]: Variable;
}
