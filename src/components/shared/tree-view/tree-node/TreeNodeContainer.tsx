import { connect } from 'react-redux';
import { RootState } from '../../../app';
import { toggleNode } from './actions';
import { getTreeNode } from './selectors';
import { TreeNode, TreeNodeProps } from './TreeNode';

type TreeNodeOwnProps = Pick<TreeNodeProps, 'namespace' | 'id'>;

const mapStateToProps = (state: RootState, ownProps: TreeNodeOwnProps) =>
  getTreeNode(state, ownProps.namespace, ownProps.id);

export default connect(mapStateToProps, { toggleNode })(TreeNode);
