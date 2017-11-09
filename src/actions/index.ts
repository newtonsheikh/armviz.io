import { createAction } from 'redux-actions';

export const treeNodeActions = {
  toggle: createAction( 'TREE_NODE_TOGGLE', (context: string, nodeId: string) => ({ context, nodeId }))
};
