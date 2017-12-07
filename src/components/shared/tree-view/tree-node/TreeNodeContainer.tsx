import { connect } from 'react-redux';
import { AppState } from '../../../app';
import { toggleTreeNode as toggle } from './actions';
import { getTreeNode } from './selectors';
import { TreeNode, TreeNodeProps } from './TreeNode';

type TreeNodeOwnProps = Pick<TreeNodeProps, 'namespace' | 'id'>;

const mapStateToProps = (state: AppState, ownProps: TreeNodeOwnProps) =>
  getTreeNode(state, ownProps.namespace, ownProps.id);

export default connect(mapStateToProps, { toggle })(TreeNode);
