import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './assets/style/index.less';
import Test from './test';

ReactDOM.render(
    <Test age="11"/>
    , document.getElementById('app') 
)
if (module.hot) { module.hot.accept(); }