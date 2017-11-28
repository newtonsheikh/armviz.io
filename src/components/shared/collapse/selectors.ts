import * as _ from 'lodash';
import { RootState } from '../../app';
import { CollapseState } from './reducer';

export const getCollapse = (state: RootState, namespace: string[], collapseId: string): CollapseState =>
  _.get(state, [...namespace, collapseId]);
