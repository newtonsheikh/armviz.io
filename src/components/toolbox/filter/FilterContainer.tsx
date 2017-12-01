import { connect } from 'react-redux';
import { RootState } from '../../app/index';
import { getFilter } from './selectors';
import { Filter } from './Filter';
import { filterByCategory as filter } from './actions';

const mapStateToProps = (state: RootState) => getFilter(state);

export default connect(mapStateToProps, { filter })(Filter);
