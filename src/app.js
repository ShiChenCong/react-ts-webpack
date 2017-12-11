/// <reference path="../typing/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/style/index.less';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import initStore from './store/store'
import home from './container/Home';
import login from './container/Login';
var store = initStore({});

ReactDOM.render(
    <Provider store={store} key={Math.random()}>
        <Router>
            <Switch>
                <Route exact path="/" component={login} />
                <Route path="/home" component={home} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('app')
)

if (module.hot) { module.hot.accept(); }//组件热更新
