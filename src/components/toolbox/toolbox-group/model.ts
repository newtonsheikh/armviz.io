import { CollapseState } from '../../shared/collapse';
import { TreeViewState } from '../../shared/tree-view';

export interface ToolboxGroupState extends CollapseState {
  name: string;
  rootIds: string[];
  itemsById: TreeViewState;
}
