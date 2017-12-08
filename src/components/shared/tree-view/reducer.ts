import { Action, combineActions, handleActions } from 'redux-actions';
import { TREE_NODE_COLLAPSE, TREE_NODE_EXPAND, TREE_NODE_TOGGLE } from '../../../constants';
import { TreeNodeActionPayload, treeNodeReducer, TreeNodeState } from './tree-node';

export interface TreeViewState<T> {
  [nodeId: string]: TreeNodeState<T>;
}

export default handleActions({
  [combineActions(
    TREE_NODE_TOGGLE,
    TREE_NODE_COLLAPSE,
    TREE_NODE_EXPAND
  )]: (state: TreeViewState<any>, action: Action<TreeNodeActionPayload>) => {
    const { nodeId } = action.payload;
    return {
      ...state,
      [nodeId]: treeNodeReducer(state[nodeId], action)
    };
  }
}, {});
