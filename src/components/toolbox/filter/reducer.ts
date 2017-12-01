import { Action, combineActions, handleActions } from 'redux-actions';
import { FilterActionPayload, filterByCategory } from './actions';

export interface FilterState {
   category: string;
   text: string;
}

export const filter = handleActions({
    [combineActions(
        filterByCategory
    )]: (state: FilterState, action: Action<FilterActionPayload>) => {
      const { category, text } = action.payload;

      const newState = {
        category,
        text
      };

      return newState;
    }
  }, {});
