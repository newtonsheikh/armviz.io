import { createActions } from 'redux-actions';

export interface TreeNodeActionPayload {
  namespace: string;
  nodeId: string;
  expanded?: boolean;
}

export const { toggleNode, expandNode, collapseNode } = createActions<TreeNodeActionPayload>({
  TOGGLE_NODE: (namespace, nodeId, expanded) => ({ namespace, nodeId, expanded: !expanded }),
  EXPAND_NODE: (namespace, nodeId) => ({ namespace, nodeId }),
  COLLAPSE_NODE: (namespace, nodeId) => ({ namespace, nodeId })
});

export default {
  toggleNode,
  expandNode,
  collapseNode
};
