import { createStore, applyMiddleware, compose } from 'redux';
import indexReducer from '../reducer/IndexReducer';

export default (initStore) => createStore(indexReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

