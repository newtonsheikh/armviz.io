import { createActions } from 'redux-actions';

export interface FilterActionPayload {
    category: string;
    text: string;
}

export const { filterByCategory } = createActions<FilterActionPayload>({
    FILTER_BY_CATEGORY: (category, text) => ({category, text})
});

export default {
    filterByCategory
};