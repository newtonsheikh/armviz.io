import { connect } from 'react-redux';
import { dndContext } from '../../constants';
import { AppState } from '../app';
import { addNode } from './actions';
import Canvas from './Canvas';
import { getCanvasElements } from './selectors';

const mapStateToProps = (state: AppState) => getCanvasElements;

export default connect(mapStateToProps, { addNode })(dndContext(Canvas));
