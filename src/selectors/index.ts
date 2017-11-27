import * as _ from 'lodash';
import { RootState } from '../reducers/index';
import { TreeNodeState } from '../reducers/shared/treeNode';

export const getTreeNode = (state: RootState, namespace: string, nodeId: string): TreeNodeState =>
  _.get(state, namespace + '.' + nodeId);
