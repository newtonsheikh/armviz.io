import { Action, combineActions, handleActions } from 'redux-actions';
import { collapse, expand, toggle, TreeNodeActionPayload, treeNodeReducer, TreeNodeState } from './tree-node';

export interface TreeViewState {
  [nodeId: string]: TreeNodeState;
}

export default handleActions({
  [combineActions(toggle, expand, collapse)](state: TreeViewState, action: Action<TreeNodeActionPayload>) {
    const { nodeId } = action.payload;
    return {
      ...state,
      [nodeId]: treeNodeReducer(state[nodeId], action)
    };
  }
}, {});
