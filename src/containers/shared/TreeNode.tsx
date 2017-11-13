import _ from 'lodash';
import { connect } from 'react-redux';
import { treeNodeActions } from '../../actions/index';
import { TreeNode, TreeNodeProps } from '../../components/shared/TreeNode';

type TreeNodeOwnProps = Pick<TreeNodeProps, 'context' | 'path'>;
type TreeNodeStateProps = Pick<TreeNodeProps, 'data' | 'expanded' | 'childIds'>;

const mapStateToProps = (state: any, ownProps: TreeNodeOwnProps): TreeNodeStateProps => {
  const nodeId = _.last(ownProps.path);
  const nodeState = _.get(state, [ownProps.context, nodeId]);
  return {
    data: nodeState.data,
    expanded: nodeState.expanded,
    childIds: nodeState.childIds
  };
};

export default connect(mapStateToProps, treeNodeActions)(TreeNode);
