import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.scss';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
          <Link to="home">home</Link>
          <Link to="page1">page1</Link>
          <Link to="page2">page2</Link>
      </header>
    )
  }
}
