import axios from 'axios';
import $RefParser, { FileInfo } from 'json-schema-ref-parser';
import { action, computed, observable, runInAction } from 'mobx';

export class SchemaStore {
  $ref = 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json';
  parser = new $RefParser();

  @observable loading = false;
  @observable error: Error = null;
  @observable templateSchema: any = null;

  @computed
  get latestResourceSchemas() {
    if (!this.templateSchema) {
      return [];
    }

    const { templateSchema, getResourceType } = this;
    const resourceTypes = new Set();
    const resourceSchemas = templateSchema.properties.resources.items.oneOf[0].allOf[1].oneOf;
    const latest = [];

    for (let i = resourceSchemas.length; i--; ) {
      const schema = resourceSchemas[i];
      const type = getResourceType(schema);
      if (!resourceTypes.has(type)) {
        resourceTypes.add(type);
        latest.push(schema);
      }
    }
    latest.sort((a, b) => getResourceType(a).localeCompare(getResourceType(b)));

    return latest;
  }

  @action
  loadSchema() {
    const { $ref, parser } = this;
    const resolve = {
      http: {
        order: 1,
        canRead: /^https:/i,
        read: (file: FileInfo) => {
          const localUrl = process.env.PUBLIC_URL + file.url.substr(36);
          return axios.get(localUrl).then(res => res.data);
        }
      }
    };
    this.loading = true;
    parser
      .dereference({ $ref }, { resolve })
      .then(schema => runInAction(() => (this.templateSchema = schema)))
      .catch((error: Error) => runInAction(() => (this.error = error)))
      .finally(() => runInAction(() => (this.loading = false)));
  }

  getResourceType(resourceSchema: any): string {
    const properties = resourceSchema.properties || resourceSchema.allOf[1].properties;
    return properties.type.enum[0];
  }
}
