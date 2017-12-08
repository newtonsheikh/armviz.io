import { Action, combineActions, handleActions } from 'redux-actions';
import { TREE_NODE_COLLAPSE, TREE_NODE_EXPAND, TREE_NODE_TOGGLE } from '../../../../constants';
import { TreeNodeActionPayload } from './actions';

export interface TreeNodeState<T> {
  id: string;
  data: T;
  expanded?: boolean;
  childIds?: string[];
}

export default handleActions({
  [combineActions(
    TREE_NODE_TOGGLE,
    TREE_NODE_EXPAND,
    TREE_NODE_COLLAPSE
  )]: (state: TreeNodeState<any>, action: Action<TreeNodeActionPayload>) => ({
    ...state,
    expanded: action.payload.expanded
  }),
}, {});
