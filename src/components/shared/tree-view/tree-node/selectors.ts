import * as _ from 'lodash';
import { RootState } from '../../../app';
import { TreeNodeState } from './reducer';

export const getTreeNode = (state: RootState, namespace: string, nodeId: string): TreeNodeState =>
  _.get(state, namespace + '.' + nodeId);
