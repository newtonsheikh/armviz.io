import { Action, combineActions, handleActions } from 'redux-actions';
import { closeCollapse, CollapseActionPayload, openCollapse, toggleCollapse } from './actions';

export interface CollapseState {
  expanded?: boolean;
}

export default handleActions({
  [combineActions(
    toggleCollapse,
    openCollapse,
    closeCollapse
  )](state: CollapseState, action: Action<CollapseActionPayload>) {
    const { expanded } = action.payload;
    return { ...state, expanded };
  }
}, {});
