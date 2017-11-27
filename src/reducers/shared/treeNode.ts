import { Action, combineActions, handleActions } from 'redux-actions';
import { collapse, expand, toggle, TreeNodeActionPayload } from '../../actions/treeNode';

export interface TreeNodeState {
  id: string;
  data: any;
  expanded?: boolean;
  childIds?: string[];
}

export const treeNode = handleActions({
  [combineActions(toggle, expand, collapse)](state: TreeNodeState, action: Action<TreeNodeActionPayload>) {
    const { expanded } = action.payload;
    return { ...state, expanded };
  }
}, {});
