import React, { Component } from 'react';
import './index.scss';

export default class Page1 extends Component{
  render() {
    return (
      <div className="page1"> Page1 
          <img src={require('../../img/1.jpg')}  height="20" /> 
      </div>
    );
  }
}
