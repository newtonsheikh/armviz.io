import { Action, combineActions, handleActions } from 'redux-actions';
import {
  collapseNode,
  expandNode,
  toggleNode,
  TreeNodeActionPayload,
  treeNodeReducer,
  TreeNodeState
} from './tree-node';

export interface TreeViewState {
  [nodeId: string]: TreeNodeState;
}

export default handleActions({
  [combineActions(toggleNode, expandNode, collapseNode)](state: TreeViewState, action: Action<TreeNodeActionPayload>) {
    const { nodeId } = action.payload;
    return {
      ...state,
      [nodeId]: treeNodeReducer(state[nodeId], action)
    };
  }
}, {});
