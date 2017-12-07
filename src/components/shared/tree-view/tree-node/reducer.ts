import { Action, combineActions, handleActions } from 'redux-actions';
import { TREE_NODE_COLLAPSE, TREE_NODE_EXPAND, TREE_NODE_TOGGLE } from '../../../../constants';
import { TreeNodeActionPayload } from './actions';

export interface TreeNodeState {
  id: string;
  data: any;
  expanded?: boolean;
  childIds?: string[];
}

export default handleActions({
  [combineActions(
    TREE_NODE_TOGGLE,
    TREE_NODE_EXPAND,
    TREE_NODE_COLLAPSE
  )]: (state: TreeNodeState, action: Action<TreeNodeActionPayload>) => ({
    ...state,
    expanded: action.payload.expanded
  }),
}, {});
