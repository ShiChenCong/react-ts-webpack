/// <reference path="../typing/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/style/index.less';
import Test from './test';

ReactDOM.render(
    <Test />
    , document.getElementById('app') 
)
if (module.hot) { module.hot.accept(); }//组件热更新