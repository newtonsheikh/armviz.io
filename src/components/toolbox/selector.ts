import _ from 'lodash';
import { RootState } from '../app';

export const getToolbox = (state: RootState) => {
  const { filter, groups } = state.toolbox;
  if (filter.category == 'All') {
    const groupsProp = _.keys(groups).map(groupName => ({
      name: groupName,
      rootIds: groups[groupName].rootIds
    }));
    return {
      filter,
      groups: groupsProp
    };
  }
  else {
    return {
      filter,
      groups: [{
        name: filter.category,
        rootIds: groups[filter.category].rootIds
      }]
    }
  }
};
