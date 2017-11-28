import _ from 'lodash';
import { RootState } from '../app';

export const getToolbox = (state: RootState) => {
  const { filter, groups } = state.toolbox;
  const groupsProp = _.keys(groups).map(groupName => ({
    name: groupName,
    rootIds: groups[groupName].rootIds
  }));

  return {
    filter,
    groups: groupsProp
  };
};
