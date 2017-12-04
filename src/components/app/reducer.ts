import { combineReducers } from 'redux';
import { canvasReducer as canvas, CanvasState } from '../canvas';
import { editorReducer as editor, EditorState } from '../editor';
import { toolboxReducer as toolbox, ToolboxState } from '../toolbox';

export interface RootState {
  toolbox: ToolboxState;
  canvas: CanvasState;
  editor: EditorState;
}

export default combineReducers({
  toolbox,
  canvas,
  editor
});
