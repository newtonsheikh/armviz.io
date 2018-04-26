import axios from 'axios';
import $RefParser, { FileInfo } from 'json-schema-ref-parser';
import { action, observable, runInAction } from 'mobx';

export class SchemaStore {
  $ref = 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json';
  parser = new $RefParser();

  @observable loading = false;
  @observable schema: any = null;
  @observable error: Error = null;

  @action
  loadSchema() {
    const { $ref, parser, read } = this;
    const resolve = {
      http: {
        order: 1,
        canRead: /^https:/i,
        read
      }
    };
    this.loading = true;
    parser
      .dereference({ $ref }, { resolve })
      .then(schema => runInAction(() => (this.schema = schema)))
      .catch((error: Error) => runInAction(() => (this.error = error)))
      .finally(() => runInAction(() => (this.loading = false)));
  }

  read = (file: FileInfo) => {
    const localUrl = process.env.PUBLIC_URL + file.url.substr(36);
    return axios.get(localUrl).then(res => res.data);
  };
}
