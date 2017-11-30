import { createActions } from 'redux-actions';

export interface CollapseActionPayload {
  namespace: string[];
  collapseId: string;
  expanded?: boolean;
}

export const { toggleCollapse, openCollapse, closeCollapse } = createActions<CollapseActionPayload>({
  TOGGLE_COLLAPSE: (namespace, collapseId, expanded) => ({ namespace, collapseId, expanded: !expanded }),
  OPEN_COLLAPSE: (namespace, collapseId) => ({ namespace, collapseId, expanded: true }),
  CLOSE_COLLAPSE: (namespace, collapseId) => ({ namespace, collapseId, expanded: false })
});

export default {
  toggleCollapse,
  openCollapse,
  closeCollapse
};
