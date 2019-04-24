import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initState = {};
const store = createStore(rootReducer, initState);

export default store;
