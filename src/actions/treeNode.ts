import { createActions } from 'redux-actions';

export interface TreeNodeActionPayload {
  route: {
    context: string[];
    nodeId: string;
  };
  expanded: boolean;
}

export const { toggle, expand, collapse } = createActions<TreeNodeActionPayload>({
  TOGGLE: (route, expanded) => ({ route, expanded: !expanded }),
  EXPAND: (route, expanded) => ({ route, expanded }),
  COLLAPSE: (route, expanded) => ({ route, expanded })
});

export default {
  toggle,
  expand,
  collapse
};
