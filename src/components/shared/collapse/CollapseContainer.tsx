import { connect } from 'react-redux';
import { RootState } from '../../app';
import { toggle } from './actions';
import { Collapse, CollapseProps } from './Collapse';
import { getCollapse } from './selectors';

type CollapseOwnProps = Pick<CollapseProps, 'namespace' | 'id'>;

const mapStateToProps = (state: RootState, ownProps: CollapseOwnProps) =>
  getCollapse(state, ownProps.namespace, ownProps.id);

export default connect(mapStateToProps, { toggle })(Collapse);
