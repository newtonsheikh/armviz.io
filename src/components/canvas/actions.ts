import { ElementDefinition, Position } from 'cytoscape';
import { createAction } from 'redux-actions';
import uuidv4 from 'uuid/v4';
import { ToolboxItemData } from '../toolbox/index';

export type AddNodeActionPayload = ElementDefinition;

export const addNode = createAction<AddNodeActionPayload, ToolboxItemData, Position>(
  'ADD_NODE',
  (itemData, renderedPosition) => ({
    data: { id: uuidv4(), ...itemData },
    renderedPosition
  })
);

export default {
  addNode
};
