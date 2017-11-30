import { combineReducers } from 'redux';
import { editorReducer as editor } from '../editor';
import { toolboxReducer as toolbox } from '../toolbox';
import { ToolboxState } from '../toolbox/reducer';

export interface RootState {
  toolbox: ToolboxState;
  editor: {
    templateJson: string;
  };
}

export default combineReducers({
  toolbox,
  editor
});
