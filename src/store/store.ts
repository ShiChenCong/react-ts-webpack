import { createStore, applyMiddleware, compose } from 'redux';
import indexReducer from '../reducer/IndexReducer';
import Window = index.Window;
declare var window: Window;
export default (initStore) => createStore(indexReducer, initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

