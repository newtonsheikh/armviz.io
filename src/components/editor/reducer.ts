import { Action, handleActions } from 'redux-actions';
import { Resource } from '../../types';
import { AddNodeActionPayload } from '../canvas/actions';
import { EditorActionPayload } from './actions';

export interface EditorState {
  templateJson: string;
}

export default handleActions({
  CHANGE_TEMPLATE_CONTENT: (state: EditorState, action: Action<EditorActionPayload>) => ({
    ...state, templateJson: action.payload.content
  }),
  ADD_NODE: (state: EditorState, action: Action<AddNodeActionPayload>) => {
    const template = JSON.parse(state.templateJson);
    const resource = (action.payload.data as any).resource as Resource;
    template.resources.push(resource);
    return {
      ...state,
      templateJson: JSON.stringify(template, null, 2)
    };
  }
}, {});
