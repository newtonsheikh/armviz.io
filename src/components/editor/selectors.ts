import { RootState } from '../app';

export const getEditorContent = (state: RootState) => ({
  content: state.editor.templateJson
});
