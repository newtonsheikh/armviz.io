import { connect } from 'react-redux';
import { RootState } from '../../app/index';
import { filterByCategory as filter } from './actions';
import { Filter } from './Filter';
import { getFilter } from './selectors';

const mapStateToProps = (state: RootState) => getFilter(state);

export default connect(mapStateToProps, { filter })(Filter);
