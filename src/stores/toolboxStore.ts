import { TreeNode, TreeNodes } from 'components/shared/TreeView';
import { computed } from 'mobx';
import { SchemaStore } from './schemaStore';
import { ToolboxItemPayload } from './toolboxStore';

export interface ToolboxItemPayload {
  text: string;
  index?: number;
}

export class ToolboxStore {
  schemaStore: SchemaStore;

  constructor(schemaStore: SchemaStore) {
    this.schemaStore = schemaStore;
  }

  @computed
  get resourceTree() {
    const { toStartCase } = this;
    const { latestResourceSchemas, getResourceType } = this.schemaStore;
    const roots: TreeNodes<ToolboxItemPayload> = [];
    const resourceTypes = latestResourceSchemas.map(schema => getResourceType(schema));

    for (let i = resourceTypes.length; i--; ) {
      const path = resourceTypes[i].split('/');
      let level = roots;
      for (let j = 0; j < path.length; j++) {
        const name = path[j];
        const text = toStartCase(j === 0 ? name.substr(10) : name);
        const existingNode = level.find(node => node.text === text);
        if (existingNode) {
          level = existingNode.children;
        } else {
          const newNode: TreeNode<ToolboxItemPayload> = { text };
          j < path.length - 1 ? (newNode.children = []) : (newNode.index = i);
          level.unshift(newNode);
          level = newNode.children;
        }
      }
    }

    return roots;
  }

  toStartCase(text: string) {
    text = text.replace(/([a-z])([A-Z])/g, '$1 $2');
    return text[0].toUpperCase() + text.slice(1);
  }
}
