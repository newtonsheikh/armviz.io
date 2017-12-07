export interface Resource {
  name: string;
  type: string;
  apiVersion: string;
  [prop: string]: any;
}

export type Resources = Resource[];
