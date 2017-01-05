webpackJsonp([0,2],{"./pages/app.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("../node_modules/react/react.js"),c=r(s),l=n("../node_modules/react-dom/index.js"),f=n("../node_modules/react-redux/lib/index.js"),p=n("../node_modules/redux/lib/index.js"),d=n("../node_modules/redux-thunk/lib/index.js"),m=r(d),g=n("../node_modules/react-router/lib/index.js"),h=n("./js/reducers/index.js"),b=r(h);n("./css/common.scss");var y=n("./pages/page1/index.js"),v=r(y),_=n("./pages/page2/index.js"),j=r(_),E=n("./pages/page3/index.js"),x=r(E),O=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"header"},c.default.createElement(g.Link,{to:"page1"},"page1"),c.default.createElement(g.Link,{to:"page2"},"page2"),c.default.createElement(g.Link,{to:"page3"},"page3")),this.props.children)}}]),t}(s.Component),w=(0,p.createStore)(b.default,{},(0,p.applyMiddleware)(m.default));(0,l.render)(c.default.createElement(f.Provider,{store:w},c.default.createElement(g.Router,{history:g.browserHistory},c.default.createElement(g.Route,{path:"/",component:O},c.default.createElement(g.IndexRoute,{component:v.default}),c.default.createElement(g.Route,{path:"page1",component:v.default}),c.default.createElement(g.Route,{path:"page2",component:j.default}),c.default.createElement(g.Route,{path:"page3",component:x.default})))),document.getElementById("app"))},0:function(e,t,n){e.exports=n("./pages/app.js")},"./js/reducers/index.js":function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments[1]);return{data:e.data}}},"./css/common.scss":function(e,t){},"./pages/page1/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("../node_modules/react/react.js"),c=r(s);n("./pages/page1/index.scss");var l=n("./img/003.png"),f=(r(l),n("./img/1.jpg")),p=r(f),d=n("./img/luffy.jpeg"),m=r(d),g=n("./img/dribbble.gif"),h=r(g),b=n("./img/logo.svg"),y=r(b),v=n("./img/test.JPG"),_=r(v),j=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=document.createElement("img");return e.src=n("./img/dribbble.gif"),document.body.appendChild(e),c.default.createElement("div",{className:"page1"}," Page1 haha",c.default.createElement("img",{src:n("./img/logo.svg"),height:"20"}),c.default.createElement("img",{src:p.default,height:"50"}),c.default.createElement("img",{src:m.default,height:"50"}),c.default.createElement("img",{src:h.default,height:"50"}),c.default.createElement("img",{src:y.default,height:"20"}),c.default.createElement("img",{src:_.default,height:"20"}))}}]),t}(s.Component);t.default=j},"./pages/page1/index.scss":"./css/common.scss","./img/003.png":function(e,t,n){e.exports=n.p+"images/d4b2f130.003.png"},"./img/1.jpg":function(e,t,n){e.exports=n.p+"images/4cafc7c8.1.jpg"},"./pages/page3/index.scss":"./css/common.scss","./img/dribbble.gif":function(e,t,n){e.exports=n.p+"images/ecb79603.dribbble.gif"},"./img/logo.svg":function(e,t,n){e.exports=n.p+"images/f4778c4d.logo.svg"},"./img/test.JPG":function(e,t,n){e.exports=n.p+"images/9b5210b9.test.JPG"},"./pages/page2/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=c(t[n],3),o=r[0],a=r[1],u=r[2];if(e[o]&&e[o]===e[a]&&e[o]===e[u])return e[o]}return null}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n("../node_modules/react/react.js"),p=r(f);n("./pages/page2/index.scss");var d=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return p.default.createElement(h,null)}}]),t}(f.Component);t.default=d;var m=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this;return p.default.createElement("button",{className:"square",onClick:function(){return e.props.onClick()}},this.props.value)}}]),t}(f.Component),g=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"renderSquare",value:function(e){var t=this;return p.default.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),p.default.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),p.default.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(f.Component),h=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},e}return i(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.state.history,n=t[this.state.stepNumber],r=s(n.squares),o=void 0;o=r?"Winenr: "+r:this.state.xIsNext?"Next player:X":"Next player:O";var a=t.map(function(t,n){var r=n?"Move #"+n:"Game start";return p.default.createElement("li",{key:n},p.default.createElement("a",{href:"#",onClick:function(){return e.jumpTo(n)}},r))});return p.default.createElement("div",{className:"game"},p.default.createElement("div",{className:"game-board"},p.default.createElement(g,{squares:n.squares,onClick:function(t){return e.handleClick(t)}})),p.default.createElement("div",{className:"game-info"},p.default.createElement("div",null,o),p.default.createElement("ol",null,a)))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:!(e%2)})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[this.state.stepNumber],r=n.squares.slice();s(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([o({squares:r},"squares",r)]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}}]),t}(f.Component)},"./pages/page2/index.scss":"./css/common.scss","./pages/page3/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("../node_modules/react/react.js"),c=r(s);n("./pages/page3/index.scss");var l=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"page3"}," Page3 ")}}]),t}(s.Component);t.default=l},"./img/luffy.jpeg":function(e,t,n){e.exports=n.p+"images/e9faa0be.luffy.jpeg"}});