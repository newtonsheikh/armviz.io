import { Action, handleActions } from 'redux-actions';
import { AddNodeActionPayload } from '../canvas/actions';
import { ToolboxItemData } from '../toolbox';
import { EditorActionPayload } from './actions';

export interface EditorState {
  templateJson: string;
}

export default handleActions({
  CHANGE_TEMPLATE_CONTENT: (state: EditorState, action: Action<EditorActionPayload>) => ({
    ...state, templateJson: action.payload.content
  }),
  ADD_NODE: (state: EditorState, action: Action<AddNodeActionPayload>) => {
    const item = action.payload.data as ToolboxItemData;
    const template = JSON.parse(state.templateJson);
    template.resources.push(item.resource);
    return { ...state, templateJson: JSON.stringify(template, null, 2) };
  }
}, {});
