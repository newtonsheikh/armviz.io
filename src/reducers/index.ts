import _ from 'lodash';
import { handleAction } from 'redux-actions';
import { treeNodeActions } from './../actions/index';

export default handleAction(treeNodeActions.toggle, (state: any, action) => {
  const { context, nodeId } = action.payload;
  const expanded = _.get(state, [context, nodeId, 'expanded']);
  _.set(state, [context, nodeId, 'expanded'], !expanded);
  return { ...state };
}, {});
