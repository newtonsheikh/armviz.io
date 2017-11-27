import { combineReducers } from 'redux';
import { TreeViewState } from '../shared/tree-view';
import { treeViewReducer as toolboxItems } from '../shared/tree-view';

export interface RootState {
  toolboxItems: TreeViewState;
}

export default combineReducers({
  toolboxItems
});
