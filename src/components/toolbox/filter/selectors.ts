import * as _ from 'lodash';
import { RootState } from '../../app';

//export const getFilter = (state: RootState): FilterState =>{
//  const { filter } = state.toolbox;
//  //const groupsProp = _.keys(groups).map(groupName => ({
//    
//  return {
//    category: filter.category,
//    text: filter.text
//  };
//}

export const getFilter = (state: RootState) => ({
  category: state.toolbox.filter.category,
  text: state.toolbox.filter.text,
  categories: _.concat(['All'], _.keys(state.toolbox.groups))

})