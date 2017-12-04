import { connect } from 'react-redux';
import { dndContext } from '../../constants';
import { RootState } from '../app';
import { addNode } from './actions';
import Canvas from './Canvas';
import { getCanvasElements } from './selectors';

const mapStateToProps = (state: RootState) => getCanvasElements;

export default connect(mapStateToProps, { addNode })(dndContext(Canvas));
