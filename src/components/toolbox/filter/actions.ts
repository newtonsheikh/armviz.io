import { createActions } from 'redux-actions';

export interface FilterActionPayload {
    category: string;
    text: string;
}

export const { filterByCategory, filterByText } = createActions<FilterActionPayload>({
    FILTER_BY_CATEGORY: (category, text) => ({category, text}),
    FILTER_BY_TEXT: (category, text) => ({category, text})
});

export default {
    filterByCategory,
    filterByText
};
