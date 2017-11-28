import { combineReducers } from 'redux';
import { CollapseState } from '../shared/collapse';
import { collapseReducer as Compute } from '../shared/collapse';
import { TreeViewState } from '../shared/tree-view';
import { treeViewReducer as toolboxItems } from '../shared/tree-view';

export interface RootState {
  toolboxItems: TreeViewState;
  toolboxGroups: {
    Compute: CollapseState;
  };
}

export default combineReducers({
  toolboxItems,
  toolboxGroups: combineReducers({
    Compute
  })
});
