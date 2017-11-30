import { Action, handleAction } from 'redux-actions';
import { changeTemplateContent, EditorActionPayload } from './actions';

export default handleAction( changeTemplateContent, (
  state: { templateJson: string }, action: Action<EditorActionPayload>
) => {
  return { ...state, templateJson: action.payload.content };
}, {});
