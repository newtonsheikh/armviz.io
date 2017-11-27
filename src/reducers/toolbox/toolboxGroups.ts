import { TreeNodeState } from '../shared/treeNode';

export interface ToolboxGroupsState {
  [groupName: string]: {
    expanded: boolean;
    rootIds: string[];
    nodes: {
      [nodeId: string]: TreeNodeState;
    }
  };
}
