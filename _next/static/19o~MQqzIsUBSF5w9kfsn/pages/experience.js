(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/a9y":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("/HRN")),i=r(n("WaGi")),o=r(n("ZDA2")),s=r(n("/+P4")),l=r(n("N9n2")),d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=d(n("q1tI")),u=(d(n("lgD3")),d(n("SVmy"))),p=d(n("PgRs")),m=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":u.default[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:f.error},c.default.createElement(p.default,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:f.h1},e):null,c.default.createElement("div",{style:f.desc},c.default.createElement("h2",{style:f.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(c.default.Component);m.displayName="ErrorPage",t.default=m;var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"3KT8":function(e,t,n){"use strict";var r=n("0iUn"),a=n("sLSF"),i=n("MI3g"),o=n("a7VT"),s=n("Tit0"),l=n("q1tI"),d=n.n(l),c=(n("17x9"),n("vOnD")),u=n("YFqc"),p=n.n(u),m=(n("+Mj3"),n("zwpS")),f=n("4njo"),y=c.c.div.withConfig({displayName:"ExperienceBlock__ExperienceBlockContainer",componentId:"sc-5r2bxt-0"})(["display:flex;margin:25px auto 25px;> span{margin-top:1px;}h3 a{text-decoration:none;color:inherit;}h3.link{cursor:pointer;}h3.link:hover{text-decoration:underline;}hr{"," border:0;border-bottom:1px solid;}h3,h4,p{margin:0 0 20px 20px;"," span{display:block;margin-top:15px;font-style:italic;}}&:last-child{margin-bottom:15px;}"],function(e){return e.large?"margin: 0 20px 35px;":"margin: 0 20px 20px;"},function(e){return e.large?"margin-bottom: 35px;":""}),h=function(e){function t(e){return Object(r.default)(this,t),Object(i.default)(this,Object(o.default)(t).call(this,e))}return Object(s.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){var e=this.props.experience;return d.a.createElement(y,this.props,"academic"==e.type?d.a.createElement(m.a,{width:24,height:24,color:"black"}):d.a.createElement(f.a,{width:24,height:24,color:"black"}),d.a.createElement("div",null,this.props.noLink?d.a.createElement("h3",null,e.title):d.a.createElement("h3",{className:"link"},d.a.createElement(p.a,{href:"/cv/".concat(e.key)},d.a.createElement("a",null,e.title))),d.a.createElement("h4",null,e.company),this.props.noDate?"":d.a.createElement("p",null,e.start_month," ",e.start_year," -"," ","Present"!==e.end_year?e.end_month:""," ",e.end_year),this.props.small?"":d.a.createElement("hr",null),this.props.small?"":d.a.createElement("p",null,e.description),d.a.createElement("ul",null,e.important_points.map(function(e,t){return d.a.createElement("li",{key:t},e)}))))}}]),t}(l.PureComponent);t.a=h},"42TL":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),i=n("O40h"),o=n("0iUn"),s=n("sLSF"),l=n("MI3g"),d=n("a7VT"),c=n("Tit0"),u=n("q1tI"),p=n.n(u),m=n("vOnD"),f=(n("eomm"),n("20a2"),n("CUtM")),y=n("3Mv1"),h=n("+Mj3"),E=n("3KT8"),_=n("SMcR"),g=m.c.div.withConfig({displayName:"experience__CardLayout",componentId:"uu3yya-0"})(["display:flex;color:white;min-height:390px;flex-wrap:wrap;@media (min-width:850px){flex-wrap:nowrap;}h1{margin-top:0;margin-right:20px;}> div:first-child{margin-right:40px;padding:40px 0 25px 35px;display:flex;justify-content:space-between;width:100%;@media (min-width:850px){display:block;max-width:120px;padding:30px;width:auto;}> hr{margin:20px 0;display:none;@media (min-width:850px){display:block;}}ul{padding-left:12px;}}"]),T=m.c.div.withConfig({displayName:"experience__ExperienceContainer",componentId:"uu3yya-1"})(["background:",";flex:1 0 0;padding:35px;color:black;"],function(e){return e.theme.colors.primary_light}),v=function(e){function t(e){return Object(o.default)(this,t),Object(l.default)(this,Object(d.default)(t).call(this,e))}return Object(c.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){var e=this.props.experience;return p.a.createElement(f.a,{currentPage:"/cv",color:h.a.colors.primary,backTo:"/cv"},p.a.createElement(y.a,{color:h.a.colors.primary,noPadding:!0},null==e?p.a.createElement("p",null,"Looking for the post..."):p.a.createElement(g,null,p.a.createElement("div",null,p.a.createElement("h1",null,e.start_year,e.start_year==e.end_year?"":" - ".concat(e.end_year)),p.a.createElement("p",null,"Present"===e.end_year?"From ":"",e.start_month,"Present"!==e.end_year?" - ".concat(e.end_month):""),p.a.createElement("hr",null),p.a.createElement("ul",null,e.keywords.map(function(e,t){return p.a.createElement("li",{key:t},e)}))),p.a.createElement(T,null,p.a.createElement(E.a,{experience:e,noDate:!0,noLink:!0,large:!0})))))}}],[{key:"getExperience",value:function(e){return _.experiences[e]}},{key:"getInitialProps",value:function(){var e=Object(i.default)(a.a.mark(function e(n){var r,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query,e.next=3,t.getExperience(r.id);case 3:return i=e.sent,e.abrupt("return",{post_id:r.id,experience:i});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(u.Component);t.default=v},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),i=r(n("MI3g")),o=r(n("a7VT")),s=r(n("AT/M")),l=r(n("sLSF")),d=r(n("Tit0")),c=r(n("dfwq")),u=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),m="undefined"==typeof window;t.default=function(){var e,t=new u.default;function n(n){e=n.props.reduceComponentsToState((0,c.default)(t)),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function c(e){var r;return(0,a.default)(this,c),r=(0,i.default)(this,(0,o.default)(c).call(this,e)),m&&(t.add((0,s.default)(r)),n((0,s.default)(r))),r}return(0,d.default)(c,r),(0,l.default)(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(p.Component)}},AlE6:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experience",function(){var e=n("42TL");return{page:e.default||e}}])},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},PgRs:function(e,t,n){e.exports=n("m/Pd")},SMcR:function(e,t,n){"use strict";var r=[{title:"Thesis within Distributed Tracing and Testing",company:"Spotify",type:"academic",start_year:"2020",start_month:"January",end_year:"2020",end_month:"May",description:"",keywords:[],important_points:["Upcoming thesis with the same team that I worked with as an intern","[WIP] Subject: Application of tracing for testing complex distributed sytems"]},{title:"Backend Software Engineer Intern",company:"Spotify",type:"industry",start_year:"2019",start_month:"June",end_year:"2019",end_month:"August",description:"",keywords:[],important_points:["Backend engineer in the payments team","Worked on a microservice architecture based on GCP, Python and Go","Integration with internal and external partners, updates to existing system, and creation of new internal services"]},{title:"Project Based Exchange Studies",company:"Global Development Hub",type:"academic",start_year:"2018",start_month:"March",end_year:"2018",end_month:"July",description:"",keywords:[],important_points:["Challenge driven ICT project with local students in Nairobi, Kenya",'Combined with bachelor thesis work: "Increasing Market Reach Using Crowdsourcing Technology"']},{title:"Research Assistant",company:"Swedish Museum of Natural History",type:"industry",start_year:"2017",start_month:"October",end_year:"Present",end_month:"Present",description:"",keywords:[],important_points:["Part time project work besides studies","Working together with professor Fredrik Ronquist, towards publishing papers within phylogenetics and computational biology.","Programs statistical and computational models in C and R"]},{title:"Software Developer",company:"LS Elektronik",type:"industry",start_year:"2017",start_month:"April",end_year:"2019",end_month:"May",description:"",keywords:[],important_points:["Part time work besides studies","Development work on Mimer, a software based two-way radio platform used for staff communication at many locations such as Arlanda Airport","Programming in a large code base with primarily Object Pascal"]},{title:"Teaching Assistant",company:"KTH Royal Institute of Technology",type:"academic",start_year:"2017",start_month:"January",end_year:"Present",end_month:"Present",description:"",keywords:[],important_points:['Teachers assistant in the course "Operating Systems" with more than 100 students.','Previously lab assistant in "Embedded Electronics"',"Continuously improves course material together with the professor"]},{title:"Webdeveloper Intern",company:"MBrace",type:"industry",start_year:"2016",start_month:"June",end_year:"2016",end_month:"August",description:"",keywords:[],important_points:["Independantly designed, planned and developed a WordPress site."]},{title:"Degree program in ICT, Distributed Systems and Data Science",company:"KTH Royal Institute of Technology",type:"academic",start_year:"2015",start_month:"August",end_year:"2020",end_month:"May",description:"",keywords:[],important_points:["Bachelor’s degree in Information and Communication Technology.","Pursuing Master’s degree in Software Engineering of Distributed Systems.","Will graduate in May 2020","Average Grade: 4.78 / 5"]},{title:"Scout Leader",company:"Equmenia Hässelby",type:"industry",start_year:"2013",start_month:"August",end_year:"Present",end_month:"Present",description:"",keywords:[],important_points:["Working tightly together as a team of approximately 20 leaders","Organizes around 3 events every year with 50 – 200 participants","Continuously organizes and leads weekly meetings for 30+ participants"]},{title:"Board Member",company:"Equmenia Hässelby",type:"industry",start_year:"2013",start_month:"January",end_year:"Present",end_month:"Present",description:"",keywords:[],important_points:["Visionary and administrative work for the 100+ member organization","Hosts activities for kids, including scouting, choruses and musical groups"]}];e.exports={experiences:(r.map(function(e,t){return e.key=t,e}),r)}},SVmy:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),i=n("JB68"),o=n("sNwI"),s=n("NwJ3"),l=n("tEej"),d=n("IP1Z"),c=n("fNZA");a(a.S+a.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,u,p=i(e),m="function"==typeof this?this:Array,f=arguments.length,y=f>1?arguments[1]:void 0,h=void 0!==y,E=0,_=c(p);if(h&&(y=r(y,f>2?arguments[2]:void 0,2)),null==_||m==Array&&s(_))for(n=new m(t=l(p.length));t>E;E++)d(n,E,h?y(p[E],E):p[E]);else for(u=_.call(p),n=new m;!(a=u.next()).done;E++)d(n,E,h?o(u,y,[a.value,E],!0):a.value);return n.length=E,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var i=n("d04V"),o=n.n(i),s=n("yLu3"),l=n.n(s);function d(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return d})},eomm:function(e,t,n){e.exports=n("/a9y")},ldVq:function(e,t,n){var r=n("QMMT"),a=n("UWiX")("iterator"),i=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||i.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n("q1tI")),o=a(n("4hZ1")),s=n("IClC");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head";return[i.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=l;var c=["name","httpEquiv","charSet","itemProp"];function u(e){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(l("")).filter((t=new r.default,n=new r.default,a=new r.default,o={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!t.has(e.key)&&(t.add(e.key),!0);switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var i=0,s=c.length;i<s;i++){var l=c[i];if(e.props.hasOwnProperty(l))if("charSet"===l){if(a.has(l))return!1;a.add(l)}else{var d=e.props[l],u=o[l]||new r.default;if(u.has(d))return!1;u.add(d),o[l]=u}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return i.default.cloneElement(e,{key:r,className:n})});var t,n,a,o}var p=o.default();function m(e){var t=e.children;return i.default.createElement(s.HeadManagerContext.Consumer,null,function(e){return i.default.createElement(p,{reduceComponentsToState:u,handleStateChange:e},t)})}m.rewind=p.rewind,t.default=m},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["AlE6",1,0]]]);