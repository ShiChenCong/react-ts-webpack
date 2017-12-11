import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import Home from './Home'

export default combineReducers({
    Home,
    router
})