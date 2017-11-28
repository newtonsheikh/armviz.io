import { Action, combineActions, handleActions } from 'redux-actions';
import { collapse, CollapseActionPayload, expand, toggle } from './actions';

export interface CollapseState {
  expanded?: boolean;
}

export default handleActions({
  [combineActions(toggle, expand, collapse)](state: CollapseState, action: Action<CollapseActionPayload>) {
    const { expanded } = action.payload;
    return { ...state, expanded };
  }
}, {});
