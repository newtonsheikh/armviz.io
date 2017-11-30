import { Action, handleAction } from 'redux-actions';
import { changeTemplateContent, EditorActionPayload } from './actions';

export interface EditorState {
  templateJson: string;
}

export default handleAction(changeTemplateContent, (state: EditorState, action: Action<EditorActionPayload>) => ({
  ...state, templateJson: action.payload.content
}), {});
