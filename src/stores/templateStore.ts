import { action, observable } from 'mobx';

export class TemplateStore {
  readonly defaultTemplate = [
    '{',
    '  "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",',
    '  "contentVersion": "1.0.0.0",',
    '  "parameters": {},',
    '  "variables": {},',
    '  "resources": [],',
    '  "output": {}',
    '}'
  ].join('\n');

  @observable template = this.defaultTemplate;

  @action
  updateTemplate = (template: string) => {
    this.template = template;
  };
}
