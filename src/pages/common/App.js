// frame of this web app
import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';


export default class Application extends Component {
  render() {
    return (
      <div>  
        <Header />
        {this.props.children}
      </div>
    );
  }
}
