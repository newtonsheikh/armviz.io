import { ElementDefinition } from 'cytoscape';
import { Action, handleAction } from 'redux-actions';
import uuidv4 from 'uuid/v4';
import { addNode, AddNodeActionPayload } from './actions';

export interface CanvasState {
  elements: ElementDefinition[];
}

export default handleAction(addNode, (state: CanvasState, action: Action<AddNodeActionPayload>) => {
  const { data, renderedPosition } = action.payload;
  return {
    ...state,
    elements: [
      ...state.elements,
      {
        data: { id: uuidv4(), label: data.resourceName },
        renderedPosition
      }
    ]
  };
}, {});
