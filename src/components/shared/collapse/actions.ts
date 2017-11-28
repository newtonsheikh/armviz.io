import { createActions } from 'redux-actions';

export interface CollapseActionPayload {
  namespace: string;
  collapseId: string;
  expanded?: boolean;
}

export const { toggle, expand, collapse } = createActions<CollapseActionPayload>({
  TOGGLE: (namespace, collapseId, expanded) => ({ namespace, collapseId, expanded: !expanded }),
  EXPAND: (namespace, collapseId) => ({ namespace, collapseId }),
  COLLAPSE: (namespace, collapseId) => ({ namespace, collapseId })
});

export default {
  toggle,
  expand,
  collapse
};
