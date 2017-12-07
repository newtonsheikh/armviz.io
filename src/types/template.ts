import { Outputs } from './outputs';
import { Parameters } from './parameters';
import { Resources } from './resources';
import { Variables } from './variables';

export interface Template {
  $schema: 'http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#';
  contentVersion: string;
  parameters: Parameters;
  variables: Variables;
  resources: Resources;
  outputs: Outputs;
}
