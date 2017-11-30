import { connect } from 'react-redux';
import { RootState } from '../app/index';
import { changeTemplateContent as onChange } from './actions';
import Editor from './Editor';
import { getEditorContent } from './selectors';

const mapStateToProps = (state: RootState) => getEditorContent(state);

export default connect(mapStateToProps, { onChange })(Editor);
