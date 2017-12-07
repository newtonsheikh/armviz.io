export interface ToolboxItemData {
  label: string;
  resource: {
    name: string;
    type: string;
    apiVersion: string;
    [props: string]: any;
  };
}
