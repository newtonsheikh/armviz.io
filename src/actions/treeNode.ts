import { createActions } from 'redux-actions';

export interface TreeNodeActionPayload {
  namespace: string;
  nodeId: string;
  expanded?: boolean;
}

export const { toggle, expand, collapse } = createActions<TreeNodeActionPayload>({
  TOGGLE: (namespace, nodeId, expanded) => ({ namespace, nodeId, expanded: !expanded }),
  EXPAND: (namespace, nodeId) => ({ namespace, nodeId }),
  COLLAPSE: (namespace, nodeId) => ({ namespace, nodeId }),
});

export default {
  toggle,
  expand,
  collapse
};
