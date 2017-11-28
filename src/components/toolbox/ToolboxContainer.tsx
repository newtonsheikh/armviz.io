import { connect } from 'react-redux';
import { RootState } from '../app/index';
import { getToolbox } from './selector';
import Toolbox from './Toolbox';

const mapStateToProps = (state: RootState) => getToolbox(state);

export default connect(mapStateToProps)(Toolbox);
