import _ from 'lodash';
import { AppState } from '../app';

export const getToolbox = (state: AppState) => {
  const { filter, groups } = state.toolbox;
  if (filter.category === 'All' && filter.text !== '') {
    // get root ids to loop through root items
    const groupsFilterd: object[] = [];
    _.keys(groups).forEach((groupName: string) => {
      const rootIds = groups[groupName].rootIds;
      const newRootIds = [];
      let match = false;
      for (const rootId of rootIds) {
        const resourceName = groups[groupName].items[rootId].data.label;
        if (_.includes(_.toLower(resourceName), _.toLower(filter.text))) {
          newRootIds.push(rootId);
          match = true;
        }
      }
      if (match) {
        groupsFilterd.push(
          { name: groupName, rootIds: newRootIds } );
      }
    });
    return {
      filter,
      groups: groupsFilterd
    };
  }
  if (filter.category === 'All') {
    const groupsProp = _.keys(groups).map(groupName => ({
      name: groupName,
      rootIds: groups[groupName].rootIds
    }));
    return {
      filter,
      groups: groupsProp
    };
  }
  return {
    filter,
    groups: [{
      name: filter.category,
      rootIds: groups[filter.category].rootIds
    }]
  };
};
