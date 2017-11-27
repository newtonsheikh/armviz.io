import { connect } from 'react-redux';
import { toggle } from '../../actions/treeNode';
import { TreeNode, TreeNodeProps } from '../../components/shared/TreeNode';
import { RootState } from '../../reducers/index';
import { getTreeNode } from '../../selectors/index';

type TreeNodeOwnProps = Pick<TreeNodeProps, 'namespace' | 'id'>;

const mapStateToProps = (state: RootState, ownProps: TreeNodeOwnProps) =>
  getTreeNode(state, ownProps.namespace, ownProps.id);

export default connect(mapStateToProps, { toggle })(TreeNode);
