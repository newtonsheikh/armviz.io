import { combineReducers } from 'redux';
import treeView, { TreeViewState } from './shared/treeView';

export interface RootState {
  treeView: TreeViewState;
}

export default combineReducers({
  treeView
});
