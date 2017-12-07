import { AppState } from '../app';

export const getEditorContent = (state: AppState) => ({
  content: state.editor.templateJson
});
