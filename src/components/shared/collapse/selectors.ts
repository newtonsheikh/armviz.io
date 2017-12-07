import * as _ from 'lodash';
import { AppState } from '../../app';
import { CollapseState } from './reducer';

export const getCollapse = (state: AppState, namespace: string[], collapseId: string): CollapseState =>
  _.get(state, [...namespace, collapseId]);
