import * as _ from 'lodash';
import { RootState } from '../../app';

export const getFilter = (state: RootState) => ({
  category: state.toolbox.filter.category,
  text: state.toolbox.filter.text,
  categories: _.concat(['All'], _.keys(state.toolbox.groups))
});
