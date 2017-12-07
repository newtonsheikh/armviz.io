import { Action, combineActions, handleActions } from 'redux-actions';
import { COLLAPSE_CLOSE, COLLAPSE_OPEN, COLLAPSE_TOGGLE } from '../../../constants';
import { CollapseActionPayload } from './actions';

export interface CollapseState {
  isOpen?: boolean;
}

export default handleActions({
  [combineActions(
    COLLAPSE_TOGGLE,
    COLLAPSE_OPEN,
    COLLAPSE_CLOSE
  )]: (state: CollapseState, action: Action<CollapseActionPayload>) => ({
    ...state,
    isOpen: action.payload.isOpen
  })
}, {});
