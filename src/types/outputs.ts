import { ParameterType } from './parameters';

export interface Output {
  type: ParameterType;
  value: string;
}

export interface Outputs {
  [outputName: string]: Output;
}
