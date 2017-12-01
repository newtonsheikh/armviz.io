import { combineReducers } from 'redux';
import { Action, combineActions, handleActions } from 'redux-actions';
import { closeCollapse, openCollapse, toggleCollapse } from '../shared/collapse/actions';
import { CollapseActionPayload, collapseReducer } from '../shared/collapse/index';
import { treeViewReducer } from '../shared/tree-view';
import { collapseNode, expandNode, toggleNode, TreeNodeActionPayload } from '../shared/tree-view/index';
import { ToolboxGroupState } from './toolbox-group/index';
import { FilterState, filter } from './filter/reducer'

export interface ToolboxGroupsState {
  [name: string]: ToolboxGroupState;
}

export interface ToolboxState {
  filter: FilterState;
  groups: ToolboxGroupsState;
}

const groups = handleActions({
  [combineActions(
    toggleNode,
    expandNode,
    collapseNode
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
    toggleCollapse,
    openCollapse,
    closeCollapse
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
