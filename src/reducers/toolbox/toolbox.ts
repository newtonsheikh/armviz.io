import { ToolboxGroupsState } from './toolboxGroups';

export interface ToolboxState {
  category: string;
  filterText: string;
  groups: ToolboxGroupsState;
}
