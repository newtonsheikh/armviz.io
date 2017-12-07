import { createStore } from 'redux';
import { rootReducer } from '../components/app';
import { initialState } from './initialState';

export const store = createStore(rootReducer, initialState);
