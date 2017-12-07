import { createActions } from 'redux-actions';
import { COLLAPSE_CLOSE, COLLAPSE_OPEN, COLLAPSE_TOGGLE } from '../../../constants';

export interface CollapseActionPayload {
  namespace: string[];
  collapseId: string;
  isOpen: boolean;
}

export const { toggleCollapse, openCollapse, closeCollapse } = createActions<CollapseActionPayload>({
  [COLLAPSE_TOGGLE]: (namespace, collapseId, isOpen) => ({ namespace, collapseId, isOpen: !isOpen }),
  [COLLAPSE_OPEN]: (namespace, collapseId) => ({ namespace, collapseId, isOpen: true }),
  [COLLAPSE_CLOSE]: (namespace, collapseId) => ({ namespace, collapseId, isOpen: false })
});

export default {
  COLLAPSE_TOGGLE,
  openCollapse,
  closeCollapse
};
