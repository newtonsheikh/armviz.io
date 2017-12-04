import { Position } from 'cytoscape';
import { createAction } from 'redux-actions';
import { ToolboxItemData } from '../toolbox';

export interface AddNodeActionPayload {
  data: ToolboxItemData;
  renderedPosition: Position;
}

export const addNode = createAction<AddNodeActionPayload, ToolboxItemData, Position>(
  'ADD_NODE',
  (data, renderedPosition) => ({ data, renderedPosition })
);

export default {
  addNode
};
