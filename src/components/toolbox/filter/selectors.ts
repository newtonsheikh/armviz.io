import * as _ from 'lodash';
import { AppState } from '../../app';

export const getFilter = (state: AppState) => ({
  category: state.toolbox.filter.category,
  text: state.toolbox.filter.text,
  categories: _.concat(['All'], _.keys(state.toolbox.groups))
});
