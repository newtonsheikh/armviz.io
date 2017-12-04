import { ElementDefinition } from 'cytoscape';
import { Action, handleAction } from 'redux-actions';
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
        data: { label: data.resourceName },
        renderedPosition
      }
    ]
  };
}, {});
