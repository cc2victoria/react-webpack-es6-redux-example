// sidebar nav of the whole page
import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.scss';

class  Items extends Component{
  render() {
    return (
      <div className='items'>     
        <Link className="item"activeClassName="link-active"  onlyActiveOnIndex={true} to="/dana/koala">
          <div className="itemFlex">
            <div className="navicon koalaData"></div>
            <div className="dataLabel">page1</div>
          </div>
        </Link>
        <Link className="item" activeClassName="link-active" to="/dana/koala/material">
          <div className="itemFlex">
            <div className="navicon koalaMaterial"></div>
            <div className="dataLabel">page2</div>
          </div>
        </Link>
        <Link className="item" activeClassName="link-active" to="/dana/koala/works">
          <div className="itemFlex">
            <div className="navicon koalaWorks"></div>
            <div className="dataLabel">page3</div>
          </div>
        </Link>
      </div>
    );
  }
}
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar"> 
          <div className="sidebar-expand" onClick={ this.props.toggleExpand }>
            <span className="fa fa-bars"></span>
          </div>
          <Items />
      </div>
    );
  }
}
