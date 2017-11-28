import { createStore } from 'redux';
import { rootReducer } from '../components/app';
import { rootState } from './rootState';

export const store = createStore(rootReducer, rootState);
