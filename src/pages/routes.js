// 页面路由配置
import React from 'react';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';

// pages
import Application from './common/App.js';
import Home from './home/index';
import Page1 from './page1/index';
import Page2 from './page2/index';

export default (
    <Route path="/" component={Application}>
      <IndexRoute component={Page1}/>
      <Route path="home" component={Home}></Route>
      <Route path="page1" component={Page1}></Route>
      <Route path="page2" component={Page2}></Route>
    </Route>
);


