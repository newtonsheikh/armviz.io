import _ from 'lodash';
import { AppState } from '../../../app';
import { TreeNodeState } from './reducer';

export const getTreeNode = (state: AppState, namespace: string[], nodeId: string): TreeNodeState =>
  _.get(state, [...namespace, nodeId]);
