import React, { Component } from 'react';
import './index.scss';
import png from '../../img/003.png';
import jpg from '../../img/1.jpg';
import jpeg from '../../img/luffy.jpeg';
import gif from '../../img/dribbble.gif';
import svg from '../../img/logo.svg';
import JPG from '../../img/test.JPG';

export default class Page1 extends Component{
  render() {
    let img = document.createElement("img");
    img.src = require('../../img/dribbble.gif');
    document.body.appendChild(img);
  
    return (
      <div className="page1"> Page1 haha
          <img src={require('../../img/logo.svg')}  height="20" /> 
          <img src={jpg} height="50" />
          <img src={jpeg} height="50" />
          <img src={gif} height="50" />
          <img src={svg} height="20" />
          <img src={JPG} height="20" />
      </div>
    );
  }
}
