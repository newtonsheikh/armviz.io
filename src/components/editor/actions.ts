import { createActions } from 'redux-actions';

export interface EditorActionPayload {
  content: string;
  event: monaco.editor.IModelContentChangedEvent;
}

export const {
  changeTemplateContent,
} = createActions<EditorActionPayload>({
    CHANGE_TEMPLATE_CONTENT: (content, event) => ({ content, event })
  });
