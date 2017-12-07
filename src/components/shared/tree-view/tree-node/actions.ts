import { createActions } from 'redux-actions';
import { TREE_NODE_COLLAPSE, TREE_NODE_EXPAND, TREE_NODE_TOGGLE } from '../../../../constants';

export interface TreeNodeActionPayload {
  namespace: string[];
  nodeId: string;
  expanded: boolean;
}

export const { toggleTreeNode, expandTreeNode, collapseTreeNode } = createActions<TreeNodeActionPayload>({
  [TREE_NODE_TOGGLE]: (namespace, nodeId, expanded) => ({ namespace, nodeId, expanded: !expanded }),
  [TREE_NODE_EXPAND]: (namespace, nodeId) => ({ namespace, nodeId, expanded: true }),
  [TREE_NODE_COLLAPSE]: (namespace, nodeId) => ({ namespace, nodeId, expanded: false })
});

export default {
  toggleTreeNode,
  expandTreeNode,
  collapseTreeNode
};
