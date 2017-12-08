import { connect } from 'react-redux';
import { AppState } from '../app';
import { getToolbox } from './selector';
import Toolbox from './Toolbox';

const mapStateToProps = (state: AppState) => getToolbox(state);

export default connect(mapStateToProps)(Toolbox);
