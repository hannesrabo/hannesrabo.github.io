(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+oT+":function(t,e,n){var o=n("eVuF");function r(t,e,n,r,i,a,s){try{var l=t[a](s),u=l.value}catch(c){return void n(c)}l.done?e(u):o.resolve(u).then(r,i)}t.exports=function(t){return function(){var e=this,n=arguments;return new o(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,l,"next",t)}function l(t){r(a,o,i,s,l,"throw",t)}s(void 0)})}}},"1TCz":function(t,e,n){"use strict";n.r(e);var o=n("ln6h"),r=n.n(o),i=n("O40h"),a=n("0iUn"),s=n("sLSF"),l=n("MI3g"),u=n("a7VT"),c=n("Tit0"),p=n("2Eek"),f=n.n(p),d=n("FbiP"),h=n.n(d);var m=n("q1tI"),v=n.n(m),g=n("8Bbg"),y=n.n(g),b=n("vOnD"),x=n("YFqc"),E=n.n(x),w=n("20a2"),C=n.n(w),O=n("Hj4a"),S=n("+Mj3"),_=b.c.nav.withConfig({displayName:"NavBar",componentId:"sc-1izdi8v-0"})(["width:100%;margin-left:auto;@media (min-width:850px){width:40%;}ul{display:flex;list-style:none;flex-flow:row wrap;justify-content:center;padding:0;li{text-align:center;display:block;flex:1;position:relative;}}"]),N=b.c.li.withConfig({displayName:"NavBar__SectionTitle",componentId:"sc-1izdi8v-1"})(["font-size:15px;line-height:1.3;position:relative;a{padding:8px;font-size:20px;display:block;text-decoration:none;color:",";font-weight:",";}&:last-child::before{position:absolute;bottom:0px;left:0;width:100%;height:3px;background:",";content:'';transition:transform 0.2s;transform:translate3D( -","00%,0,0 );}"],function(t){return t.active?"".concat(S.a.colors.primary):"".concat(S.a.colors.text)},function(t){return t.active?"600":"400"},S.a.colors.primary,function(t){return t.numberOfTabs-t.activeIndex-1}),T=n("3a0i"),k=b.c.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-1js86ve-0"})(["width:80%;max-width:850px;margin:0 auto;display:flex;justify-content:space-between;"]),j=b.c.div.withConfig({displayName:"Header__BackArrow",componentId:"sc-1js86ve-1"})(["width:35px;display:flex;justify-content:center;align-items:flex-end;padding-bottom:15px;cursor:pointer;"]),P=function(t){function e(t){var n;Object(a.default)(this,e);var o=0,r=(n=Object(l.default)(this,Object(u.default)(e).call(this,t))).props.query;return r&&r.navId&&(o=r.navId),n.state={selectedSection:o},n}return Object(c.default)(e,t),Object(s.default)(e,[{key:"componentDidMount",value:function(){var t=this;C.a.events.on("routeChangeStart",function(e){var n=e;n.length>1&&"/"==n[n.length-1]&&(n=e.substr(0,n.length-1)),O.navigation_sections.map(function(e,o){e.path==n&&t.setState({selectedSection:o})})})}},{key:"render",value:function(){var t=this;return v.a.createElement(k,null,this.props.backTo?v.a.createElement(j,{onClick:function(){C.a.push(t.props.backTo)}},v.a.createElement(T.a,{flipX:!0})):"",v.a.createElement(_,null,v.a.createElement("ul",null,O.navigation_sections.map(function(e,n){var o=e.title,r=e.path;return v.a.createElement(N,{activeIndex:t.state.selectedSection,numberOfTabs:O.navigation_sections.length,key:n,active:t.state.selectedSection===n},v.a.createElement(E.a,{href:r,prefetch:!0,shallow:!0},v.a.createElement("a",null,o)))}))))}}]),e}(m.Component),I=n("FhCX");function D(){var t,e,n=(t=["\n\thtml{overflow-x: hidden;}\n\n\tbody {\n\t\tmargin: 0;\n\t\tcolor: #222;\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t}\n\t/* .page-transition-enter {\n\t\topacity: 0;\n\t}\n\t.page-transition-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 150ms ease-in;\n\t} */\n\t.page-transition-exit {\n\t\topacity: 1;\n\t}\n\t.page-transition-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 200ms ease-in;\n\t}\n"],e||(e=t.slice(0)),h()(f()(t,{raw:{value:h()(e)}})));return D=function(){return n},n}n.d(e,"default",function(){return F});var U=Object(b.b)(D()),M=b.c.div.withConfig({displayName:"_app__Background",componentId:"sc-15iayud-0"})(["margin:0 auto;background-image:url('/static/background/abstract-tree-top.svg');background-position:top right;background-repeat:no-repeat;background-size:80%;width:100%;box-shadow:0 0 20px 17px white inset;padding:50px 0 20px;@media (min-width:650px){background-size:70%;}@media (min-width:850px){padding:150px 0 20px;}@media (min-width:1100px){width:80%;}"]),F=function(t){function e(){return Object(a.default)(this,e),Object(l.default)(this,Object(u.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(s.default)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,o=t.router;return v.a.createElement(g.Container,null,v.a.createElement(U,null),v.a.createElement(M,null,v.a.createElement(P,{query:o.query}),v.a.createElement(I.PageTransition,{timeout:220,classNames:"page-transition"},v.a.createElement(e,n))))}}],[{key:"getInitialProps",value:function(){var t=Object(i.default)(r.a.mark(function t(e){var n,o,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,o=e.ctx,i={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(o);case 5:i=t.sent;case 6:return t.abrupt("return",{pageProps:i});case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}(y.a)},"2Eek":function(t,e,n){t.exports=n("W7oM")},"3a0i":function(t,e,n){"use strict";var o=n("UXZV"),r=n.n(o);function i(){return(i=r.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var a=n("0iUn"),s=n("sLSF"),l=n("MI3g"),u=n("a7VT"),c=n("Tit0"),p=n("q1tI"),f=n.n(p),d=n("qzIe"),h=function(t){function e(){return Object(a.default)(this,e),Object(l.default)(this,Object(u.default)(e).apply(this,arguments))}return Object(c.default)(e,t),Object(s.default)(e,[{key:"render",value:function(){var t=this.props.width?this.props.width:"24",e=this.props.height?this.props.height:"24";return f.a.createElement(d.a,i({},this.props,{width:t,height:e}),f.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:e,viewBox:"0 0 24 24"},f.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),f.a.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})))}}]),e}(p.PureComponent);e.a=h},"4bdI":function(t,e,n){n("Ui4e"),t.exports=n("WEpk").Object.freeze},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var o=n("KI45"),r=o(n("ln6h")),i=o(n("+oT+")),a=o(n("UXZV")),s=o(n("/HRN")),l=o(n("WaGi")),u=o(n("ZDA2")),c=o(n("/+P4")),p=o(n("N9n2")),f=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},d=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var h=f(n("q1tI")),m=d(n("lgD3")),v=n("Bu4q"),g=n("20a2"),y=function(t){function e(){return(0,s.default)(this,e),(0,u.default)(this,(0,c.default)(e).apply(this,arguments))}var n;return(0,p.default)(e,t),(0,l.default)(e,[{key:"getChildContext",value:function(){return{router:g.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,o=t.pageProps,r=E(e);return h.default.createElement(b,null,h.default.createElement(n,(0,a.default)({},o,{url:r})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(r.default.mark(function t(e){var n,o,i;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,e.router,o=e.ctx,t.next=3,v.loadGetInitialProps(n,o);case 3:return i=t.sent,t.abrupt("return",{pageProps:i});case 5:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)})}]),e}(h.Component);y.childContextTypes={router:m.default.object},e.default=y;var b=function(t){function e(){return(0,s.default)(this,e),(0,u.default)(this,(0,c.default)(e).apply(this,arguments))}return(0,p.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(h.Component);e.Container=b;var x=v.execOnce(function(){0});function E(t){var e=t.pathname,n=t.asPath,o=t.query;return{get query(){return x(),o},get pathname(){return x(),e},get asPath(){return x(),n},back:function(){x(),t.back()},push:function(e,n){return x(),t.push(e,n)},pushTo:function(e,n){x();var o=n?e:null,r=n||e;return t.push(o,r)},replace:function(e,n){return x(),t.replace(e,n)},replaceTo:function(e,n){x();var o=n?e:null,r=n||e;return t.replace(o,r)}}}e.createUrl=E},FGEo:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},FbiP:function(t,e,n){t.exports=n("4bdI")},FhCX:function(t,e,n){"use strict";var o,r=(o=n("TsXg"))&&o.__esModule?o:{default:o};t.exports={PageTransition:r.default}},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var t=n("1TCz");return{page:t.default||t}}])},Hj4a:function(t,e,n){"use strict";var o=[{title:"Home",path:"/"},{title:"CV",path:"/cv"},{title:"Contact",path:"/contact"}];t.exports={navigation_sections:(o.map(function(t,e){return t.navId=e,t}),o)}},S3Uj:function(t,e,n){"use strict";e.__esModule=!0,e.default=e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}(n("17x9")),r=s(n("q1tI")),i=s(n("i8i4")),a=n("VCL8");n("xfxO");function s(t){return t&&t.__esModule?t:{default:t}}var l="unmounted";e.UNMOUNTED=l;var u="exited";e.EXITED=u;var c="entering";e.ENTERING=c;var p="entered";e.ENTERED=p;e.EXITING="exiting";var f=function(t){var e,n;function o(e,n){var o;o=t.call(this,e,n)||this;var r,i=n.transitionGroup,a=i&&!i.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(r=u,o.appearStatus=c):r=p:r=e.unmountOnExit||e.mountOnEnter?l:u,o.state={status:r},o.nextCallback=null,o}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=o.prototype;return a.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(t,e){return t.in&&e.status===l?{status:u}:null},a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(e=c):n!==c&&n!==p||(e="exiting")}this.updateStatus(!1,e)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},a.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=i.default.findDOMNode(this);e===c?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},a.performEnter=function(t,e){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,i=this.getTimeouts(),a=r?i.appear:i.enter;e||o?(this.props.onEnter(t,r),this.safeSetState({status:c},function(){n.props.onEntering(t,r),n.onTransitionEnd(t,a,function(){n.safeSetState({status:p},function(){n.props.onEntered(t,r)})})})):this.safeSetState({status:p},function(){n.props.onEntered(t)})},a.performExit=function(t){var e=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(t),this.safeSetState({status:"exiting"},function(){e.props.onExiting(t),e.onTransitionEnd(t,o.exit,function(){e.safeSetState({status:u},function(){e.props.onExited(t)})})})):this.safeSetState({status:u},function(){e.props.onExited(t)})},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},a.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(t,e,n){this.setNextCallback(n),t?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},a.render=function(){var t=this.state.status;if(t===l)return null;var e=this.props,n=e.children,o=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(t,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},o}(r.default.Component);function d(){}f.contextTypes={transitionGroup:o.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var h=(0,a.polyfill)(f);e.default=h},Si88:function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;!function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}e.default=t}(n("17x9"));var o=s(n("ycFn")),r=s(n("VOcB")),i=s(n("q1tI")),a=s(n("S3Uj"));n("xfxO");function s(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var u=function(t,e){return t&&e&&e.split(" ").forEach(function(e){return(0,o.default)(t,e)})},c=function(t,e){return t&&e&&e.split(" ").forEach(function(e){return(0,r.default)(t,e)})},p=function(t){var e,n;function o(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).onEnter=function(t,n){var o=e.getClassNames(n?"appear":"enter").className;e.removeClasses(t,"exit"),u(t,o),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var o=e.getClassNames(n?"appear":"enter").activeClassName;e.reflowAndAddClass(t,o),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var o=e.getClassNames("enter").doneClassName;e.removeClasses(t,n?"appear":"enter"),u(t,o),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.getClassNames("exit").className;e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),u(t,n),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.getClassNames("exit").activeClassName;e.reflowAndAddClass(t,n),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.getClassNames("exit").doneClassName;e.removeClasses(t,"exit"),u(t,n),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,o="string"!=typeof n?n[t]:n+"-"+t;return{className:o,activeClassName:"string"!=typeof n?n[t+"Active"]:o+"-active",doneClassName:"string"!=typeof n?n[t+"Done"]:o+"-done"}},e}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=o.prototype;return r.removeClasses=function(t,e){var n=this.getClassNames(e),o=n.className,r=n.activeClassName,i=n.doneClassName;o&&c(t,o),r&&c(t,r),i&&c(t,i)},r.reflowAndAddClass=function(t,e){e&&(t&&t.scrollTop,u(t,e))},r.render=function(){var t=l({},this.props);return delete t.classNames,i.default.createElement(a.default,l({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(i.default.Component);p.propTypes={};var f=p;e.default=f,t.exports=e.default},TsXg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}(n("q1tI")),r=l(n("17x9")),i=l(n("S3Uj")),a=l(n("Si88")),s=n("xfxO");function l(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){return t!==e&&(!o.default.isValidElement(t)||!o.default.isValidElement(e)||null==t.key||t.key!==e.key)}function h(t){return o.default.isValidElement(t)&&t.type.pageTransitionDelayEnter}function m(t,e){return function(){this.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}({state:t},e))}}var v=function(t){function e(t){var n,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,n=!(r=(e.__proto__||Object.getPrototypeOf(e)).call(this,t))||"object"!==u(r)&&"function"!=typeof r?p(o):r,Object.defineProperty(p(n),"onEntering",{configurable:!0,enumerable:!0,writable:!0,value:m("entering").bind(p(n))}),Object.defineProperty(p(n),"onEntered",{configurable:!0,enumerable:!0,writable:!0,value:m("entered").bind(p(n))}),Object.defineProperty(p(n),"onExiting",{configurable:!0,enumerable:!0,writable:!0,value:m("exiting").bind(p(n))}),Object.defineProperty(p(n),"onExited",{configurable:!0,enumerable:!0,writable:!0,value:m("exited",{renderedChildren:null}).bind(p(n))});var i=t.children;return n.state={state:"enter",isIn:!h(i),currentChildren:i,nextChildren:null,renderedChildren:i,showLoading:!1},n}var n,r,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;h(this.props.children)&&this.setState({timeoutId:this.startEnterTimer()}),this.props.monkeyPatchScrolling&&"undefined"!=typeof window&&(this.originalScrollTo=window.scrollTo,this.disableScrolling=!1,window.scrollTo=function(){if(!t.disableScrolling){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.originalScrollTo.apply(window,n)}})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state,o=n.currentChildren,r=n.renderedChildren,i=n.nextChildren,a=n.isIn,s=n.state,l=this.props.children,u=d(o,l),c=d(r,l);u?(this.setState({isIn:!1,nextChildren:l,currentChildren:l}),this.state.timeoutId&&clearTimeout(this.state.timeoutId)):!c||a||"enter"!==s&&"exited"!==s?e.showLoading&&!this.state.showLoading&&this.setState({isIn:!0}):h(i)?this.setState({renderedChildren:i,nextChildren:null,timeoutId:this.startEnterTimer()}):this.setState({isIn:!0,renderedChildren:i,nextChildren:null})}},{key:"componentWillUnmount",value:function(){this.originalScrollTo&&"undefined"!=typeof window&&(window.scrollTo=this.originalScrollTo),this.state.timeoutId&&clearTimeout(this.state.timeoutId)}},{key:"onEnter",value:function(){this.disableScrolling=!1,this.setState({state:"enter",showLoading:!1})}},{key:"onExit",value:function(){this.disableScrolling=!0,this.setState({state:"exit"})}},{key:"onChildLoaded",value:function(){this.state.timeoutId&&clearTimeout(this.state.timeoutId),this.state.showLoading?this.setState({showLoading:!1}):this.setState({isIn:!0})}},{key:"startEnterTimer",value:function(){var t=this;return setTimeout(function(){t.setState({showLoading:!0})},this.props.loadingDelay)}},{key:"render",value:function(){var t=this,e=this.props,n=e.timeout,r=e.loadingComponent,s=e.loadingCallbackName,l=this.state,u=l.renderedChildren,c=l.state;-1!==["entering","exiting","exited"].indexOf(c)&&document.body&&document.body.scrollTop;var p=!!r,d=function(t,e){switch(e){case"enter":return"".concat(t,"-enter");case"entering":return"".concat(t,"-enter ").concat(t,"-enter-active");case"entered":return"".concat(t,"-enter-done");case"exit":return"".concat(t,"-exit");case"exiting":return"".concat(t,"-exit ").concat(t,"-exit-active");case"exited":return"".concat(t,"-exit-done");default:return""}}(this.props.classNames,c);return o.default.createElement(o.Fragment,null,o.default.createElement(i.default,{timeout:n,in:this.state.isIn,appear:!0,onEnter:function(){return t.onEnter()},onEntering:function(){return t.onEntering()},onEntered:function(){return t.onEntered()},onExit:function(){return t.onExit()},onExiting:function(){return t.onExiting()},onExited:function(){return t.onExited()}},o.default.createElement("div",{className:d},u&&o.default.cloneElement(u,f({},s,function(){return t.onChildLoaded()})))),p&&o.default.createElement(a.default,{in:this.state.showLoading,mountOnEnter:!0,unmountOnExit:!0,appear:!0,classNames:this.props.loadingClassNames,timeout:this.props.loadingTimeout},r))}}])&&c(n.prototype,r),s&&c(n,s),e}();v.propTypes={children:r.default.node.isRequired,classNames:r.default.string.isRequired,timeout:null,loadingComponent:r.default.element,loadingDelay:r.default.number,loadingCallbackName:r.default.string,loadingTimeout:function(t){s.timeoutsShape;t.loadingComponent},loadingClassNames:function(t){var e=r.default.string;t.loadingTimeout&&(e=e.isRequired);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.apply(void 0,[t].concat(o))},monkeyPatchScrolling:r.default.bool},v.defaultProps={loadingComponent:null,loadingCallbackName:"pageTransitionReadyToEnter",loadingDelay:500,monkeyPatchScrolling:!1};var g=v;e.default=g},Ui4e:function(t,e,n){var o=n("93I4"),r=n("6/1s").onFreeze;n("zn7N")("freeze",function(t){return function(e){return t&&o(e)?t(r(e)):e}})},VCL8:function(t,e,n){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function r(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!=n?n:null}.bind(this))}function i(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function a(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var n=null,a=null,s=null;if("function"==typeof e.componentWillMount?n="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?s="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=t.displayName||t.name,u="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=r),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,o)}}return t}n.r(e),n.d(e,"polyfill",function(){return a}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},VOcB:function(t,e,n){"use strict";function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}t.exports=function(t,e){t.classList?t.classList.remove(e):"string"==typeof t.className?t.className=o(t.className,e):t.setAttribute("class",o(t.className&&t.className.baseVal||"",e))}},W7oM:function(t,e,n){n("nZgG");var o=n("WEpk").Object;t.exports=function(t,e){return o.defineProperties(t,e)}},nZgG:function(t,e,n){var o=n("Y7ZC");o(o.S+o.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},xfxO:function(t,e,n){"use strict";e.__esModule=!0,e.classNamesShape=e.timeoutsShape=void 0;var o;(o=n("17x9"))&&o.__esModule;e.timeoutsShape=null;e.classNamesShape=null},yD6e:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")},t.exports=e.default},ycFn:function(t,e,n){"use strict";var o=n("FGEo");e.__esModule=!0,e.default=function(t,e){t.classList?t.classList.add(e):(0,r.default)(t,e)||("string"==typeof t.className?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))};var r=o(n("yD6e"));t.exports=e.default}},[["GcxT",1,0]]]);