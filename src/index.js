import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.less';
import s from './images/cat.png'
ReactDOM.render(
    <div><img  src={s}/> hello world<p>sss</p></div>
    , document.getElementById('app') 
)
console.log(11)
if (module.hot) { module.hot.accept(); }