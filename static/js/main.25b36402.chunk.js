(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,r){},15:function(t,e,r){},16:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(3),i=r.n(a),c=(r(14),r(4)),l=r(1);r(15);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(I){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var h={};function m(){}function v(){}function d(){}var p={};l(p,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,a)&&(p=g);var E=d.prototype=m.prototype=Object.create(p);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(s).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=d,n(E,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(E),l(E,c,"Generator"),l(E,a,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var s=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),f=s[0],h=s[1],m=Object(n.useState)(!1),v=Object(l.a)(m,2),d=v[0],p=v[1],y=Object(n.useState)({}),g=Object(l.a)(y,2),E=g[0],w=g[1];function b(){return(b=Object(c.a)(u().mark(function t(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=flower").then(function(t){return t.json()}).then(function(t){a(function(e){return t.items})});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}var L=function(t){var e=t.b;return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{src:e.volumeInfo.imageLinks.smallThumbnail,alt:e.volumeInfo.title})),o.a.createElement("td",null,o.a.createElement("b",null,e.volumeInfo.title)," ",o.a.createElement("br",null),o.a.createElement("small",null,e.volumeInfo.subtitle)," ",o.a.createElement("br",null),o.a.createElement("span",{className:"read",onClick:function(t){return r=e,p(!0),void w(r.volumeInfo);var r}},o.a.createElement("i",null,"Read"))),o.a.createElement("td",null,e.volumeInfo.authors?e.volumeInfo.authors:"N/A"))};return Object(n.useEffect)(function(){!function(){b.apply(this,arguments)}()},[]),o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},"Books Search"),o.a.createElement("div",{className:"searchBar"},o.a.createElement("input",{className:"bar",value:f,onChange:function(t){h(t.target.value)},name:"bar"})),o.a.createElement("div",{className:"books"},!d&&o.a.createElement("table",{width:"100%"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," "),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Author"))),o.a.createElement("tbody",null,0===r.length?o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("h1",null,"loading Data..."))):r.filter(function(t){return t.volumeInfo.title.toLowerCase().includes(f.toLowerCase())}).map(function(t,e){return o.a.createElement(L,{b:t,key:t.id})}))),d&&o.a.createElement("div",null,o.a.createElement("div",{className:"showCase"},o.a.createElement("div",null,o.a.createElement("div",{className:"bigImg"},o.a.createElement("img",{src:E.imageLinks.thumbnail,alt:E.title})),o.a.createElement("div",null,o.a.createElement("div",{className:"heading"},E.title," "),o.a.createElement("br",null),o.a.createElement("div",{className:"subTitle"},E.subtitle," "),o.a.createElement("br",null),o.a.createElement("div",{className:"desc"},E.description))),o.a.createElement("button",{onClick:function(){return p(!1)}},"Close")))))},f=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,17)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null))),f()},5:function(t,e,r){t.exports=r(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.25b36402.chunk.js.map