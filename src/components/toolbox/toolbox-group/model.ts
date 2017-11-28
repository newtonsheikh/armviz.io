import { CollapseState } from '../../shared/collapse';
import { TreeViewState } from '../../shared/tree-view';

export interface ToolboxGroupState extends CollapseState {
  rootIds: string[];
  items: TreeViewState;
}
