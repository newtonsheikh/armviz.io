import { Action, combineActions, handleActions } from 'redux-actions';
import { collapse, expand, toggle, TreeNodeActionPayload } from '../../actions/treeNode';
import { treeNode, TreeNodeState } from './treeNode';

export interface TreeViewState {
  [nodeId: string]: TreeNodeState;
}

export default handleActions({
  [combineActions(toggle, expand, collapse)](state: TreeViewState, action: Action<TreeNodeActionPayload>) {
    const { nodeId } = action.payload;
    return {
      ...state,
      [nodeId]: treeNode(state[nodeId], action)
    };
  }
}, {});
