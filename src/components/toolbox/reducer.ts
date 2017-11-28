import { Action, combineActions, handleActions } from 'redux-actions';
import { closeCollapse, openCollapse, toggleCollapse } from '../shared/collapse/actions';
import { CollapseActionPayload, collapseReducer } from '../shared/collapse/index';
import { treeViewReducer } from '../shared/tree-view';
import { collapseNode, expandNode, toggleNode, TreeNodeActionPayload } from '../shared/tree-view/index';
import { ToolboxGroupState } from './toolbox-group/index';

export interface ToolboxState {
  filter: {
    category: string;
    text: string;
  };
  groups: {
    [name: string]: ToolboxGroupState;
  };
}

export default handleActions({
  [combineActions(
    toggleNode,
    expandNode,
    collapseNode
  )]: (state: ToolboxState, action: Action<TreeNodeActionPayload>) => {
    const { namespace } = action.payload;
    if (namespace[0] !== 'toolbox') { return state; }

    const groupName = namespace[2];
    const newState = {
      ...state,
      groups: {
        ...state.groups,
        [groupName]: {
          ...state.groups[groupName],
          items: treeViewReducer(state.groups[groupName].items, action)
        }
      }
    };

    return newState;
  },

  [combineActions(
    toggleCollapse,
    openCollapse,
    closeCollapse
  )]: (state: ToolboxState, action: Action<CollapseActionPayload>) => {
    const { namespace, collapseId } = action.payload;
    if (namespace[0] !== 'toolbox') { return state; }

    const newState = {
      ...state,
      groups: {
        ...state.groups,
        [collapseId]: collapseReducer(state.groups[collapseId], action)
      }
    };

    return newState;
  }
}, {});
