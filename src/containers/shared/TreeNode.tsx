import _ from 'lodash';
import { connect } from 'react-redux';
import { toggle } from '../../actions/treeNode';
import { TreeNode, TreeNodeProps } from '../../components/shared/TreeNode';
import { RootState } from '../../reducers/index';

type TreeNodeOwnProps = Pick<TreeNodeProps, 'context' | 'path'>;
type TreeNodeStateProps = Pick<TreeNodeProps, 'data' | 'expanded' | 'childIds'>;

const mapStateToProps = (state: RootState, ownProps: TreeNodeOwnProps): TreeNodeStateProps => {
  const nodeId = _.last(ownProps.path);
  const nodeState = _.get(state, _.concat(ownProps.context, nodeId));
  return {
    data: nodeState.data,
    expanded: nodeState.expanded,
    childIds: nodeState.childIds
  };
};

export default connect(mapStateToProps, { toggle })(TreeNode);
