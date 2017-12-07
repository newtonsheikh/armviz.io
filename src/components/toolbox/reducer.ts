import { combineReducers } from 'redux';
import { Action, combineActions, handleActions } from 'redux-actions';
import { TREE_NODE_COLLAPSE, TREE_NODE_EXPAND, TREE_NODE_TOGGLE } from '../../constants';
import { COLLAPSE_CLOSE, COLLAPSE_OPEN, COLLAPSE_TOGGLE } from '../../constants';
import { CollapseActionPayload, collapseReducer } from '../shared/collapse';
import { TreeNodeActionPayload, treeViewReducer } from '../shared/tree-view';
import { filter, FilterState } from './filter/reducer';
import { ToolboxGroupState } from './toolbox-group';

export interface ToolboxGroupsState {
  [name: string]: ToolboxGroupState;
}

export interface ToolboxState {
  filter: FilterState;
  groups: ToolboxGroupsState;
}

const groups = handleActions({
  [combineActions(
    TREE_NODE_TOGGLE,
    TREE_NODE_EXPAND,
    TREE_NODE_COLLAPSE
  )]: (state: ToolboxGroupsState, action: Action<TreeNodeActionPayload>) => {
    const { namespace } = action.payload;
    if (namespace[0] !== 'toolbox') { return state; }

    const groupName = namespace[2];
    const newState = {
      ...state,
      [groupName]: {
        ...state[groupName],
        items: treeViewReducer(state[groupName].items, action)
      }
    };

    return newState;
  },

  [combineActions(
    COLLAPSE_TOGGLE,
    COLLAPSE_OPEN,
    COLLAPSE_CLOSE
  )]: (state: ToolboxGroupsState, action: Action<CollapseActionPayload>) => {
    const { namespace, collapseId } = action.payload;
    if (namespace[0] !== 'toolbox') { return state; }

    const newState = {
      ...state,
      [collapseId]: collapseReducer(state[collapseId], action)
    };

    return newState;
  }
}, {});

export default combineReducers({
  filter,
  groups,
});
