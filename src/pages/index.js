// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';

// style clear
import 'normalize.css';           

// common style
 
// Theme Style
import '../css/common.scss';

import routes from './routes'; 

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
), document.getElementById('app'));