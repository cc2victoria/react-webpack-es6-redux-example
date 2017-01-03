import React, { Component } from 'react';
import './index.scss';

export default class Page1 extends Component {
  render() {
    return (
      <div className="page1"> Page1 haha
          <img src={require("../../img/test.JPG")} height="100" />
          <img src={require('../../img/logo.svg')}  height="20" />
      </div>
    );
  }
}
