export type ParameterType = 'string' | 'secureString' | 'int' | 'bool' | 'object' | 'secureObject' | 'array';

export interface Parameter {
  type: ParameterType;
  defaultValue?: string | number | boolean | object | any[];
}

export interface Parameters {
  [parameterName: string]: Parameter;
}
