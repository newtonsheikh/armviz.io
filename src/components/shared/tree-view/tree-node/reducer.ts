import { Action, combineActions, handleActions } from 'redux-actions';
import { collapseNode, expandNode, toggleNode, TreeNodeActionPayload } from './actions';

export interface TreeNodeState {
  id: string;
  data: any;
  expanded?: boolean;
  childIds?: string[];
}

export default handleActions({
  [combineActions(
    toggleNode,
    expandNode,
    collapseNode
  )](state: TreeNodeState, action: Action<TreeNodeActionPayload>) {
    const { expanded } = action.payload;
    return { ...state, expanded };
  }
}, {});
