// 页面路由配置
import React from 'react';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';

// pages
import Application from './common/App.js';
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';

export default (
    <Route path="/" component={Application}>
      <IndexRoute component={Page1}/>
      <Route path="page1" component={Page1}></Route>
      <Route path="page2" component={Page2}></Route>
      <Route path="page3" component={Page3}></Route>
    </Route>
);


