import { combineReducers } from 'redux';
// import { CollapseState } from '../shared/collapse';
// import { TreeViewState } from '../shared/tree-view';
import { toolboxReducer as toolbox } from '../toolbox';
import { ToolboxState } from '../toolbox/reducer';

export interface RootState {
  toolbox: ToolboxState;
  // toolboxItems: TreeViewState;
  // toolboxGroups: {
  //   Compute: CollapseState;
  // };
}

export default combineReducers({
  toolbox
});
