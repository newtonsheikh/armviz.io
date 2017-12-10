export type ParameterType = 'string' | 'secureString' | 'int' | 'bool' | 'object' | 'secureObject' | 'array';

export interface Parameter {
  type: ParameterType;
  defaultValue?: string | number | boolean | object | any[];
}

export interface Parameters {
  [parameterName: string]: Parameter;
}

export type Variable = string | object | any[];

export interface Variables {
  [variableName: string]: Variable;
}

export interface Resource {
  name: string;
  type: string;
  apiVersion: string;
  [prop: string]: any;
}

export type Resources = Resource[];

export interface Output {
  type: ParameterType;
  value: string;
}

export interface Outputs {
  [outputName: string]: Output;
}

export interface Template {
  $schema: 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#';
  contentVersion: string;
  parameters: Parameters;
  variables: Variables;
  resources: Resources;
  outputs: Outputs;
}
