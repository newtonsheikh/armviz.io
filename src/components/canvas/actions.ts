import { ElementDefinition, Position } from 'cytoscape';
import { createAction } from 'redux-actions';
import uuidv4 from 'uuid/v4';
import { ToolboxItemData } from '../toolbox/toolbox-item/types';

export type AddNodeActionPayload = ElementDefinition;

export const addNode = createAction<AddNodeActionPayload, ToolboxItemData, Position>(
  'ADD_NODE',
  (item, renderedPosition) => ({
    data: {
      id: uuidv4(),
      ...item
    },
    renderedPosition
  })
);

export default {
  addNode
};
